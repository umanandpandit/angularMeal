import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';


const routes: Routes = [ 
  {path: '', component: HomeComponent},
  {path: '', component: RestaurantComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    FormsModule
  ]
})
export class AppRoutingModule { }
