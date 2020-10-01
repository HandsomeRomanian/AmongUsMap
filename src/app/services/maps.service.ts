import { Injectable } from '@angular/core';
import { Map } from "../models/map";
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})

export class MapsService {

  public static tasklenghts = { Visual: "Visual", Short: "Short", Long: "Long", Common: "Common" }

  maps = [new Map("The Skeld", 8753), new Map("Mira HQ", 7499), new Map("Polus", 8591)]

  tasks: Task[] = [
    { Id: 1, Lenght: null, Type: Task.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [2362, 4031, 2277, 3977], Place: "LowerEngine" },
    { Id: 2, Lenght: null, Type: Task.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [6731, 4085, 6824, 4162], Place: "Shields" },
    { Id: 3, Lenght: null, Type: Task.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [6708, 2670, 6800, 2732], Place: "Hallway" },
    { Id: 4, Lenght: null, Type: Task.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [7891, 2657, 7991, 2726], Place: "BotNavigation" },
    { Id: 5, Lenght: null, Type: Task.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [7883, 2086, 7991, 2156], Place: "TopNavigation" },
    { Id: 6, Lenght: null, Type: Task.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [6592, 904, 6708, 989], Place: "Weapons" },
    { Id: 7, Lenght: null, Type: Task.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [5780, 1553, 5880, 1646], Place: "Cafeteria" },
    { Id: 8, Lenght: null, Type: Task.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [5470, 3298, 5571, 3383], Place: "Admin" },
    { Id: 9, Lenght: null, Type: Task.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [3104, 2255, 3213, 2340], Place: "Medical" },
    { Id: 10, Lenght: null, Type: Task.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [2749, 2762, 2865, 2839], Place: "Security" },
    { Id: 11, Lenght: null, Type: Task.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [2254, 1054, 2362, 1147], Place: "UpperEngine" },
    { Id: 12, Lenght: null, Type: Task.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [1071, 2062, 1171, 2124], Place: "TopReactor" },
    { Id: 13, Lenght: null, Type: Task.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [1264, 2755, 1380, 2848], Place: "BotReactor" },
    { Id: 61, Lenght: null, Type: Task.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [3251, 2952, 3352, 3037], Place: "Electrical" },
    { Id: 14, Lenght: Task.Lenghts.Long, Type: Task.Types.Normal, Map: this.maps[0], Name: "Trash (Cafeteria)", Location: [5764, 704, 5904, 881], Place: null },
    { Id: 15, Lenght: Task.Lenghts.Long, Type: Task.Types.Normal, Map: this.maps[0], Name: "Trash (O2)", Location: [5888, 2075, 6004, 2191], Place: null },
    { Id: 16, Lenght: Task.Lenghts.Long, Type: Task.Types.Visual, Map: this.maps[0], Name: "Trash (Storage)", Location: [4952, 4485, 5262, 4987], Place: null },
    { Id: 20, Lenght: Task.Lenghts.Long, Type: Task.Types.Normal, Map: this.maps[0], Name: "Upload", Location: [5478, 2630, 5563, 2707], Place: null },
    { Id: 22, Lenght: Task.Lenghts.Short, Type: Task.Types.Visual, Map: this.maps[0], Name: "Prime Shields", Location: [6360, 3979, 6499, 4102], Place: null },
    { Id: 24, Lenght: Task.Lenghts.Normal, Type: Task.Types.Common, Map: this.maps[0], Name: "Swipe Card", Location: [6019, 2990, 6128, 3183], Place: null },
    { Id: 27, Lenght: Task.Lenghts.Short, Type: Task.Types.Normal, Map: this.maps[0], Name: "Calibrate Distributor", Location: [3963, 2805, 4055, 2952], Place: null },
    { Id: 32, Lenght: Task.Lenghts.Short, Type: Task.Types.Normal, Map: this.maps[0], Name: "Clean O2 Filter", Location: [6043, 1989, 6166, 2143], Place: null },
    { Id: 19, Lenght: Task.Lenghts.Long, Type: Task.Types.Normal, Map: this.maps[0], Name: "Download Data (Cafeteria)", Location: [5648, 588, 5726, 719], Place: null },
    { Id: 21, Lenght: Task.Lenghts.Long, Type: Task.Types.Normal, Map: this.maps[0], Name: "Download Data (Communications)", Location: [5710, 4019, 5803, 4073], Place: null },
    { Id: 30, Lenght: Task.Lenghts.Long, Type: Task.Types.Normal, Map: this.maps[0], Name: "Download Data (Electrical)", Location: [3259, 2816, 3352, 2885], Place: null },
    { Id: 34, Lenght: Task.Lenghts.Long, Type: Task.Types.Normal, Map: this.maps[0], Name: "Download Data (Weapons)", Location: [6584, 788, 6661, 865], Place: null },
    { Id: 38, Lenght: Task.Lenghts.Long, Type: Task.Types.Normal, Map: this.maps[0], Name: "Download Data (Navigation)", Location: [8076, 1943, 8169, 2012], Place: null },
    { Id: 36, Lenght: Task.Lenghts.Long, Type: Task.Types.Visual, Map: this.maps[0], Name: "Clear Asteroids", Location: [6599, 1298, 6886, 974], Place: null },
    { Id: 37, Lenght: Task.Lenghts.Short, Type: Task.Types.Normal, Map: this.maps[0], Name: "Chart Course", Location: [8239, 2028, 8386, 2206], Place: null },
    { Id: 40, Lenght: Task.Lenghts.Normal, Type: Task.Types.Common, Map: this.maps[0], Name: "Fix Wiring (Storage)", Location: [4651, 3061, 4767, 3153], Place: null },
    { Id: 28, Lenght: Task.Lenghts.Normal, Type: Task.Types.Common, Map: this.maps[0], Name: "Fix Wiring (Electrical)", Location: [3630, 2893, 3692, 2932], Place: null },
    { Id: 54, Lenght: Task.Lenghts.Normal, Type: Task.Types.Common, Map: this.maps[0], Name: "Fix Wiring (Navigation)", Location: [7620, 2169, 7728, 2269], Place: null },
    { Id: 57, Lenght: Task.Lenghts.Normal, Type: Task.Types.Common, Map: this.maps[0], Name: "Fix Wiring (Security)", Location: [2207, 2336, 2308, 2406], Place: null },
    { Id: 53, Lenght: Task.Lenghts.Normal, Type: Task.Types.Common, Map: this.maps[0], Name: "Fix Wiring (Admin)", Location: [5269, 2661, 5347, 2738], Place: null },
    { Id: 56, Lenght: Task.Lenghts.Normal, Type: Task.Types.Common, Map: this.maps[0], Name: "Fix Wiring (Cafeteria)", Location: [4032, 548, 4179, 641], Place: null },
    { Id: 41, Lenght: Task.Lenghts.Short, Type: Task.Types.Normal, Map: this.maps[0], Name: "Stabilize Steering", Location: [8378, 2218, 8517, 2512], Place: null },
    { Id: 42, Lenght: Task.Lenghts.Long, Type: Task.Types.Normal, Map: this.maps[0], Name: "Take fuel for engines", Location: [4481, 3971, 4604, 4110], Place: null },
    { Id: 43, Lenght: Task.Lenghts.Long, Type: Task.Types.Normal, Map: this.maps[0], Name: "Fuel Top Engine", Location: [1713, 1522, 1821, 1661], Place: null },
    { Id: 44, Lenght: Task.Lenghts.Long, Type: Task.Types.Normal, Map: this.maps[0], Name: "Fuel Bot Engine", Location: [1720, 3720, 1852, 3844], Place: null },
    { Id: 45, Lenght: Task.Lenghts.Long, Type: Task.Types.Normal, Map: this.maps[0], Name: "Start Reactor", Location: [1079, 2457, 1225, 2596], Place: null },
    { Id: 46, Lenght: Task.Lenghts.Short, Type: Task.Types.Normal, Map: this.maps[0], Name: "Unlock Manifolds", Location: [955, 1923, 1071, 2047], Place: null },
    { Id: 47, Lenght: Task.Lenghts.Long, Type: Task.Types.Visual, Map: this.maps[0], Name: "Submit Scan", Location: [3592, 2390, 3909, 2584], Place: null },
    { Id: 48, Lenght: Task.Lenghts.Long, Type: Task.Types.Normal, Map: this.maps[0], Name: "Inspect Sample", Location: [3847, 2169, 4086, 2432], Place: null },
    { Id: 49, Lenght: Task.Lenghts.Short, Type: Task.Types.Normal, Map: this.maps[0], Name: "Align Top Engine", Location: [1550, 1542, 1674, 1689], Place: null },
    { Id: 50, Lenght: Task.Lenghts.Short, Type: Task.Types.Normal, Map: this.maps[0], Name: "Align Bot Engine", Location: [1550, 3751, 1674, 3890], Place: null },
    { Id: 29, Lenght: Task.Lenghts.Short, Type: Task.Types.Normal, Map: this.maps[0], Name: "Divert Power", Location: [3398, 2821, 3468, 2875], Place: null },
    { Id: 23, Lenght: Task.Lenghts.Short, Type: Task.Types.Normal, Map: this.maps[0], Name: "Accept Diverted Power (Shields)", Location: [6947, 3321, 7040, 3406], Place: null },
    { Id: 31, Lenght: Task.Lenghts.Short, Type: Task.Types.Normal, Map: this.maps[0], Name: "Accept Diverted Power (O2)", Location: [6522, 1947, 6599, 2001], Place: null },
    { Id: 35, Lenght: Task.Lenghts.Short, Type: Task.Types.Normal, Map: this.maps[0], Name: "Accept Diverted Power (Weapons)", Location: [7063, 1097, 7156, 1213], Place: null },
    { Id: 33, Lenght: Task.Lenghts.Short, Type: Task.Types.Normal, Map: this.maps[0], Name: "Accept Diverted Power (Security)", Location: [2842, 2028, 2927, 2151], Place: null },
    { Id: 51, Lenght: Task.Lenghts.Short, Type: Task.Types.Normal, Map: this.maps[0], Name: "Accept Diverted Power (Top Engine)", Location: [1890, 937, 2022, 1022], Place: null },
    { Id: 39, Lenght: Task.Lenghts.Short, Type: Task.Types.Normal, Map: this.maps[0], Name: "Accept Diverted Power (Navigation)", Location: [7898, 1951, 7999, 2020], Place: null },
    { Id: 52, Lenght: Task.Lenghts.Short, Type: Task.Types.Normal, Map: this.maps[0], Name: "Accept Diverted Power (Bot Engine)", Location: [1774, 3166, 1867, 3244], Place: null },
    { Id: 55, Lenght: Task.Lenghts.Short, Type: Task.Types.Normal, Map: this.maps[0], Name: "Accept Diverted Power (Communications)", Location: [6105, 4027, 6221, 4112], Place: null },
    { Id: 58, Lenght: Task.Lenghts.Short, Type: Task.Types.Normal, Map: this.maps[0], Name: "Accept Diverted Power (Nuclear)", Location: [1426, 2063, 1519, 2125], Place: null },
    { Id: 59, Lenght: "30", Type: Task.Types.Sabotage, Map: this.maps[0], Name: "Reactor Meldown Top", Location: [1195, 1730, 1264, 1846], Place: null },
    { Id: 60, Lenght: "30", Type: Task.Types.Sabotage, Map: this.maps[0], Name: "Reactor Meldown Bot", Location: [1171, 3101, 1280, 3209], Place: null },
    { Id: 18, Lenght: null, Type: Task.Types.Sabotage, Map: this.maps[0], Name: "Fix Lights", Location: [3205, 3237, 3390, 3407], Place: null },
    { Id: 17, Lenght: null, Type: Task.Types.Sabotage, Map: this.maps[0], Name: "Distrupt communications", Location: [5586, 4478, 6058, 4710], Place: null },
    { Id: 25, Lenght: "30", Type: Task.Types.Sabotage, Map: this.maps[0], Name: "O2 (Admin)", Location: [6174, 2591, 6298, 2777], Place: null },
    { Id: 26, Lenght: "30", Type: Task.Types.Sabotage, Map: this.maps[0], Name: "O2 (O2)", Location: [6190, 1945, 6383, 2076], Place: null },


  ]

  currentMap;

  constructor() {
    this.currentMap = null;
  }

  getMaps(): Map[] {
    return this.maps;
  }

  getMap(id: string): Map {

    let tmpmap = this.maps.find(x => x.Id == id);

    return tmpmap;
  }

  public getTasksByType(taskType): Task[] {
    return this.tasks.filter(x => x.Type == taskType && x.Map == this.currentMap);
  }

}
