import { AfterViewInit, Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Map } from '../models/map';
import { TaskEntity } from '../models/taskentity';
import { MapsService } from '../services/maps.service';
declare var jQuery: any;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class MapComponent implements OnInit, AfterViewInit {

  img;
  ratio;
  map: Map;
  pagewidth = window.innerWidth;
  seetasks = false;
  tasks: TaskEntity[] = [];


  constructor(
    private mapService: MapsService,
    private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {

      let mapName = params.get("map");
      this.map = mapService.getMap(mapName);
      this.mapService.currentMap = this.map;
      this.tasks = mapService.tasks.filter(x => x.Map.Id == this.map.Id);

    })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.img = document.getElementById("img_ID");
    //imageMapResize();

  }

  onResize(event){
    this.pagewidth = event.target.innerWidth;
  }

  test(id){
    console.log(this.mapService.tasks.filter(x => x.Id == id)[0])
  }

  Ratio(){
    return (this.pagewidth-15) / this.map.Width;
  }

}
