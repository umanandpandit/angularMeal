import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CartComponent } from './cart/cart.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UpdateUserProfileComponent } from './update-user-profile/update-user-profile.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { RestaurantadminComponent } from './restaurantadmin/restaurantadmin.component';
import { AddfoodComponent } from './addfood/addfood.component';
import { UpdatefoodComponent } from './updatefood/updatefood.component';
import { DeletefoodComponent } from './deletefood/deletefood.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import { UpdaterestaurantComponent } from './updaterestaurant/updaterestaurant.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { RestaurantprofileComponent } from './restaurantprofile/restaurantprofile.component';
import { FooddetailsComponent } from './fooddetails/fooddetails.component';
import { UpdateRestaurantProfileComponent } from './update-restaurant-profile/update-restaurant-profile.component';
import { RestnavComponent } from './restnav/restnav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    CartComponent,
    RestaurantComponent,
    HomeComponent,
    RegisterComponent,
    NavComponent,
    FooterComponent,
    MenuComponent,
    UserDetailsComponent,
    UpdateUserProfileComponent,
    ThankyouComponent,
    RestaurantadminComponent,
    AddfoodComponent,
    UpdatefoodComponent,
    DeletefoodComponent,
    AddcustomerComponent,
    AddrestaurantComponent,
    UpdaterestaurantComponent,
    UpdatecustomerComponent,
    RestaurantprofileComponent,
    FooddetailsComponent,
    UpdateRestaurantProfileComponent,
    RestnavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
