import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { AddScheduledFlightComponent } from './add-scheduled-flight/add-scheduled-flight.component';
 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { ViewFlightsComponent } from './view-flights/view-flights.component';
import { BookingComponent } from './booking/booking.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { HistoryComponent } from './history/history.component';
import { CreateAirportComponent } from './create-airport/create-airport.component';
 
import { ViewAirportComponent } from './view-airport/view-airport.component';
import { ViewScheduleAirlineComponent } from './view-schedule-airline/view-schedule-airline.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { DiscountViewComponent } from './discount-view/discount-view.component';
import { authInterceptorProviders } from './shared/services/_services/auth.interceptor.service';
import { AUthGuardService } from './shared/services/auth-guard.service';
//import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,LoginComponent,DiscountsComponent, SignupComponent, WelcomeAdminComponent, AddScheduledFlightComponent, AddFlightComponent, ViewFlightsComponent, BookingComponent, WelcomeUserComponent, HistoryComponent, CreateAirportComponent, ViewAirportComponent, ViewScheduleAirlineComponent, ViewBookingComponent, HeaderComponent, FooterComponent, DiscountViewComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule ,HttpClientModule,Ng2FilterPipeModule,
    FormsModule,    //added here too
    ReactiveFormsModule //added here too
    ,
   // ToastrModule.forRoot()
  ],
  
  providers: [authInterceptorProviders, AUthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
