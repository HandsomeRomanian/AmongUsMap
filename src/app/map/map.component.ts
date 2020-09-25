import { AfterViewInit, Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Map } from '../models/map';
import { MapsService } from '../services/maps.service';
declare var jQuery: any;


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {

  seetasks = false;
  map: Map;
  img;
  tag1 = { ogWidth: 8753, ogHeight: 5217, label: "Test", x1: 4945, x2: 4467, y1: 5246, y2: 4939 }
  page = screen; 


  constructor(
    private mapService: MapsService,
    private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      let mapName = params.get("map");
      this.map = mapService.getMap(mapName);
      mapService.currentMap = this.map;
    })
  }

  ngOnInit(): void {
    (function ($) {
      $(document).ready(function () {
        $('map_ID').imageMapResize();
      });
      
    })(jQuery);
  }

  ngAfterViewInit(): void {
    this.img = document.getElementById("img_ID");
    console.log(this.img.clientWidth)
    console.log(this.img.clientHeight)


    //imageMapResize();

  }

}
