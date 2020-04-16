import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 

import { HomeComponent } from './home/home.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { MenuComponent } from './menu/menu.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [ 
  { path: '', component: HomeComponent},
  { path: 'restaurant', component: RestaurantComponent}, 
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'logout', component: LogoutComponent} ,
  { path: 'menu', component:MenuComponent},
  { path: 'cart', component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
