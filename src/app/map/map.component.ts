import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Map } from '../models/map';
import { MapsService } from '../services/maps.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  map: Map;

  constructor(
    private mapService: MapsService,
    private route: ActivatedRoute) { 
      this.route.paramMap.subscribe(params => {
        let mapName = params.get("map");

        this.map = mapService.getMap(mapName);
      })
    }

  ngOnInit(): void {
  }

}
