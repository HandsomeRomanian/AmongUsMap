import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapsService } from '../services/maps.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public mapService: MapsService,
    private route: ActivatedRoute) { 
      this.route.paramMap.subscribe(params => {
        let mapName = params.get("map");
        mapService.currentMap = mapService.getMap(mapName);
      })
    }
  ngOnInit(): void {
  }

}
