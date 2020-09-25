import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MapsService } from '../services/maps.service';

@Component({
  selector: 'app-roadmap',
  templateUrl: './roadmap.component.html',
  styleUrls: ['./roadmap.component.scss']
})
export class RoadmapComponent implements OnInit {


  todos = ["I wish i was this organised", "Task Labels/Overlay over maps"]

  constructor(
    private mapService: MapsService,
    private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      let mapName = params.get("map");
      mapService.currentMap = mapService.getMap(mapName);
    })
  }
  ngOnInit(): void {

  }

}
