import { Component, OnInit } from '@angular/core';
import { MapsService } from '../services/maps.service';
import { Map } from "../models/map";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  maps: Map[];

  constructor(
    public mapService: MapsService
  ) { 
    this.maps = mapService.getMaps();
  }

  ngOnInit(): void {
  }

}
