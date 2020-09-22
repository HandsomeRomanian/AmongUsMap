import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { RoadmapComponent } from './roadmap/roadmap.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "map/:map", component: MapComponent },
  { path: "roadmap", component: RoadmapComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
