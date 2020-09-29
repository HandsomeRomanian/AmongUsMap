import { Injectable } from '@angular/core';
import { Map } from "../models/map";
import { Task } from '../models/task';
import { TaskEntity } from '../models/taskentity';

@Injectable({
  providedIn: 'root'
})

export class MapsService {

  public static tasklenghts = { Visual: "Visual", Short: "Short", Long: "Long", Common: "Common" }

  maps = [new Map("The Skeld", 8753), new Map("Mira HQ", 7499), new Map("Polus", 8591)]

  tasks: TaskEntity[] = [
    { Id: 1, Lenght: null, Type: TaskEntity.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [2362, 4031, 2277, 3977] },
    { Id: 2, Lenght: null, Type: TaskEntity.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [6731, 4085, 6824, 4162] },
    { Id: 3, Lenght: null, Type: TaskEntity.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [6708, 2670, 6800, 2732] },
    { Id: 4, Lenght: null, Type: TaskEntity.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [7891, 2657, 7991, 2726] },
    { Id: 5, Lenght: null, Type: TaskEntity.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [7883, 2086, 7991, 2156] },
    { Id: 6, Lenght: null, Type: TaskEntity.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [6592, 904, 6708, 989] },
    { Id: 7, Lenght: null, Type: TaskEntity.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [5780, 1553, 5880, 1646] },
    { Id: 8, Lenght: null, Type: TaskEntity.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [5470, 3298, 5571, 3383] },
    { Id: 9, Lenght: null, Type: TaskEntity.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [3104, 2255, 3213, 2340] },
    { Id: 10, Lenght: null, Type: TaskEntity.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [2749, 2762, 2865, 2839] },
    { Id: 11, Lenght: null, Type: TaskEntity.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [2254, 1054, 2362, 1147] },
    { Id: 12, Lenght: null, Type: TaskEntity.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [1071, 2062, 1171, 2124] },
    { Id: 13, Lenght: null, Type: TaskEntity.Types.Vent, Map: this.maps[0], Name: "Vent", Location: [1264, 2755, 1380, 2848] },
    { Id: 14, Lenght: TaskEntity.Lenghts.Long, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Trash (Cafeteria)", Location: [5764, 704, 5904, 881] },
    { Id: 15, Lenght: TaskEntity.Lenghts.Long, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Trash (O2)", Location: [5888, 2075, 6004, 2191] },
    { Id: 16, Lenght: TaskEntity.Lenghts.Long, Type: TaskEntity.Types.Visual, Map: this.maps[0], Name: "Trash (Storage)", Location: [4952, 4485, 5262, 4987] },
    { Id: 20, Lenght: TaskEntity.Lenghts.Long, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Upload", Location: [5478, 2630, 5563, 2707] },
    { Id: 22, Lenght: TaskEntity.Lenghts.Short, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Prime Shields", Location: [6360, 3979, 6499, 4102] },
    { Id: 24, Lenght: TaskEntity.Lenghts.Normal, Type: TaskEntity.Types.Common, Map: this.maps[0], Name: "Swipe Card", Location: [6019, 2990, 6128, 3183] },
    { Id: 27, Lenght: TaskEntity.Lenghts.Short, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Calibrate Distributor", Location: [3963, 2805, 4055, 2952] },
    { Id: 32, Lenght: TaskEntity.Lenghts.Short, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Clean O2 Filter", Location: [6043, 1989, 6166, 2143] },
    { Id: 19, Lenght: TaskEntity.Lenghts.Long, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Download Data (Cafeteria)", Location: [5648, 588, 5726, 719] },
    { Id: 21, Lenght: TaskEntity.Lenghts.Long, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Download Data (Communications)", Location: [5710, 4019, 5803, 4073] },
    { Id: 30, Lenght: TaskEntity.Lenghts.Long, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Download Data (Electrical)", Location: [3259, 2816, 3352, 2885] },
    { Id: 34, Lenght: TaskEntity.Lenghts.Long, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Download Data (Weapons)", Location: [6584, 788, 6661, 865] },
    { Id: 38, Lenght: TaskEntity.Lenghts.Long, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Download Data (Navigation)", Location: [8076, 1943, 8169, 2012] },
    { Id: 36, Lenght: TaskEntity.Lenghts.Long, Type: TaskEntity.Types.Visual, Map: this.maps[0], Name: "Clear Asteroids", Location: [6599, 1298, 6886, 974] },
    { Id: 37, Lenght: TaskEntity.Lenghts.Short, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Chart Course", Location: [8239, 2028, 8386, 2206] },
    { Id: 40, Lenght: TaskEntity.Lenghts.Normal, Type: TaskEntity.Types.Common, Map: this.maps[0], Name: "Fix Wiring (Storage)", Location: [4651, 3061, 4767, 3153] },
    { Id: 28, Lenght: TaskEntity.Lenghts.Normal, Type: TaskEntity.Types.Common, Map: this.maps[0], Name: "Fix Wiring (Electrical)", Location: [3630, 2893, 3692, 2932] },
    { Id: 54, Lenght: TaskEntity.Lenghts.Normal, Type: TaskEntity.Types.Common, Map: this.maps[0], Name: "Fix Wiring (Navigation)", Location: [7620, 2169, 7728, 2269] },
    { Id: 57, Lenght: TaskEntity.Lenghts.Normal, Type: TaskEntity.Types.Common, Map: this.maps[0], Name: "Fix Wiring (Security)", Location: [2207, 2336, 2308, 2406] },
    { Id: 53, Lenght: TaskEntity.Lenghts.Normal, Type: TaskEntity.Types.Common, Map: this.maps[0], Name: "Fix Wiring (Admin)", Location: [5269, 2661, 5347, 2738] },
    { Id: 41, Lenght: TaskEntity.Lenghts.Short, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Stabilize Steering", Location: [8378, 2218, 8517, 2512] },
    { Id: 42, Lenght: TaskEntity.Lenghts.Long, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Take fuel for engines", Location: [4481, 3971, 4604, 4110] },
    { Id: 43, Lenght: TaskEntity.Lenghts.Long, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Fuel Top Engine", Location: [1713, 1522, 1821, 1661] },
    { Id: 44, Lenght: TaskEntity.Lenghts.Long, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Fuel Bot Engine", Location: [1720, 3720, 1852, 3844] },
    { Id: 45, Lenght: TaskEntity.Lenghts.Long, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Start Reactor", Location: [1079, 2457, 1225, 2596] },
    { Id: 46, Lenght: TaskEntity.Lenghts.Short, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Unlock Manifolds", Location: [955, 1923, 1071, 2047] },
    { Id: 47, Lenght: TaskEntity.Lenghts.Long, Type: TaskEntity.Types.Visual, Map: this.maps[0], Name: "Submit Scan", Location: [3592, 2390, 3909, 2584] },
    { Id: 48, Lenght: TaskEntity.Lenghts.Long, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Inspect Sample", Location: [3847, 2169, 4086, 2432] },
    { Id: 49, Lenght: TaskEntity.Lenghts.Short, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Align Top Engine", Location: [1550, 1542, 1674, 1689] },
    { Id: 50, Lenght: TaskEntity.Lenghts.Short, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Align Bot Engine", Location: [1550, 3751, 1674, 3890] },
    { Id: 29, Lenght: TaskEntity.Lenghts.Short, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Divert Power", Location: [3398, 2821, 3468, 2875] },
    { Id: 23, Lenght: TaskEntity.Lenghts.Short, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Accept Diverted Power (Shields)", Location: [6947, 3321, 7040, 3406] },
    { Id: 31, Lenght: TaskEntity.Lenghts.Short, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Accept Diverted Power (O2)", Location: [6522, 1947, 6599, 2001] },
    { Id: 35, Lenght: TaskEntity.Lenghts.Short, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Accept Diverted Power (Weapons)", Location: [7063, 1097, 7156, 1213] },
    { Id: 33, Lenght: TaskEntity.Lenghts.Short, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Accept Diverted Power (Security)", Location: [2842, 2028, 2927, 2151] },
    { Id: 51, Lenght: TaskEntity.Lenghts.Short, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Accept Diverted Power (Top Engine)", Location: [1890, 937, 2022, 1022] },
    { Id: 39, Lenght: TaskEntity.Lenghts.Short, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Accept Diverted Power (Navigation)", Location: [7898, 1951, 7999, 2020] },
    { Id: 52, Lenght: TaskEntity.Lenghts.Short, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Accept Diverted Power (Bot Engine)", Location: [1774, 3166, 1867, 3244] },
    { Id: 55, Lenght: TaskEntity.Lenghts.Short, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Accept Diverted Power (Communications)", Location: [6105, 4027, 6221, 4112] },
    { Id: 56, Lenght: TaskEntity.Lenghts.Short, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Accept Diverted Power (Cafeteria)", Location: [4032, 548, 4179, 641] },
    { Id: 58, Lenght: TaskEntity.Lenghts.Short, Type: TaskEntity.Types.Normal, Map: this.maps[0], Name: "Accept Diverted Power (Nuclear)", Location: [1426, 2063, 1519, 2125] },
    { Id: 59, Lenght: "30", Type: TaskEntity.Types.Sabotage, Map: this.maps[0], Name: "Reactor Meldown Top", Location: [1195, 1730, 1264, 1846] },
    { Id: 60, Lenght: "30", Type: TaskEntity.Types.Sabotage, Map: this.maps[0], Name: "Reactor Meldown Bot", Location: [1171, 3101, 1280, 3209] },
    { Id: 18, Lenght: null, Type: TaskEntity.Types.Sabotage, Map: this.maps[0], Name: "Fix Lights", Location: [3205, 3237, 3390, 3407] },
    { Id: 17, Lenght: null, Type: TaskEntity.Types.Sabotage, Map: this.maps[0], Name: "Distrupt communications", Location: [5586, 4478, 6058, 4710] },
    { Id: 25, Lenght: "30", Type: TaskEntity.Types.Common, Map: this.maps[0], Name: "O2 (Admin)", Location: [6174, 2591, 6298, 2777] },
    { Id: 26, Lenght: "30", Type: TaskEntity.Types.Common, Map: this.maps[0], Name: "O2 (O2)", Location: [6190, 1945, 6383, 2076] },


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

}
