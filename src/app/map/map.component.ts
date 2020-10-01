import { AfterViewInit, Component, OnInit, ɵbypassSanitizationTrustResourceUrl } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Map } from '../models/map';
import { Task } from '../models/task';
import { MapsService } from '../services/maps.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class MapComponent implements OnInit, AfterViewInit {

  bgmap;
  calloutsimg;
  ratio;
  map: Map;
  pagewidth = window.innerWidth;
  sidebar = true;
  ventimg;
  tasks: Task[] = [];
  toggles = Object.keys({ ...Task.Types, Callouts: "callouts", Connections: "connections" });


  constructor(
    public mapService: MapsService,
    private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      let mapName = params.get("map");
      this.map = mapService.getMap(mapName);
      this.mapService.currentMap = this.map;
      this.tasks = mapService.tasks.filter(x => x.Map.Id == this.map.Id);
    });
    console.table(this.tasks.filter(x => x.Type == Task.Types.Visual));
  }

  ngOnInit(): void {
    this.bgmap = document.getElementById("bg_map");
    this.ventimg = document.getElementById("img_connections");
  }
  
  ngAfterViewInit(): void {
    for (let element of this.toggles) {
      document.getElementById("img_" + element).style.top = this.bgmap.offsetTop.toString() - 14 + "px";
      document.getElementById("img_" + element).style.display = "none"
      
    }
    this.ventimg.style.top = this.bgmap.offsetTop.toString() - 14 + "px";
  }

  onResize(event) {
    this.pagewidth = event.target.innerWidth;
  }

  taskclick(id) {
    console.log(this.mapService.tasks.filter(x => x.Id == id)[0])
  }

  Ratio() {
    return (this.pagewidth) / this.map.Width;
  }

  hover(task: Task, action: boolean) {
    if (task.Type == Task.Types.Vent && action) {
      this.ventimg.src = "/assets/overlays/" + this.map.Id + "/vents/" + task.Place + ".png";
    }
    else if (task.Type == Task.Types.Vent && !action) {
      this.ventimg.src = "";

    }
  }

  toggle(value): void {
    if (value == "all") {
      for (let item of this.toggles) {
        if (item == "Callouts")
          break;
        let element = document.getElementById("img_" + item);
        if (element.style.display == "none") {
          element.style.display = "block";
          element.style.top = this.bgmap.offsetTop.toString() + "px";
        } else {
          element.style.display = "none";
          element.style.top = this.bgmap.offsetTop.toString() + "px";
        }
      }
    }
    else {
      let element = document.getElementById("img_" + value);
      if (element.style.display == "none") {
        element.style.display = "block";
        element.style.top = this.bgmap.offsetTop.toString() + "px";
      } else {
        element.style.display = "none";
        element.style.top = this.bgmap.offsetTop.toString() + "px";
      }
    }
  }

  isEnabled(value: Task): boolean {
    return document.getElementById("img_" + value).style.display == "block";
  }

}
