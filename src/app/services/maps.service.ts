import { Injectable } from '@angular/core';
import { Map } from "../models/map";
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})

export class MapsService {

  public static tasklenghts = { Visual: "Visual", Short: "Short", Long: "Long", Common: "Common" }

  maps = [new Map("The Skeld"), new Map("Mira HQ"), new Map("Polus")]

  tasks = [
    new Task("Fix Wiring", MapsService.tasklenghts.Common),
    new Task("Align Engine Output", MapsService.tasklenghts.Short),
    new Task("Align Telescope", MapsService.tasklenghts.Short),
    new Task("Assemble Artifact", MapsService.tasklenghts.Short),
    new Task("Buy Beverage", MapsService.tasklenghts.Short),
    new Task("Calibrate Distributor", MapsService.tasklenghts.Short),
    new Task("Clean O2 Filter", MapsService.tasklenghts.Short),
    new Task("Clear Asteroids Skeld", MapsService.tasklenghts.Visual),
    new Task("Clear Asteroids Plotus", MapsService.tasklenghts.Visual),
    new Task("Clear Asteroids MiraHQ", MapsService.tasklenghts.Long),
    new Task("Divert Power", MapsService.tasklenghts.Long),
  ]

  currentMap;

  constructor() { 
    this.currentMap = null;
  }

  getMaps(): Map[]{
    return this.maps;
  }

  getMap(id: string): Map{
    
    console.log(id)

    let tmpmap = this.maps.find(x => x.id == id);

    console.log(tmpmap)

    return tmpmap;
  }

}
