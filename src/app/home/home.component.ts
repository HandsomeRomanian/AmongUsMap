import { Component, OnInit } from '@angular/core';
import { MapsService } from '../services/maps.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public mapService: MapsService) { }

  ngOnInit(): void {
  }

}
