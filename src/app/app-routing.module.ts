import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AddScheduledFlightComponent } from './add-scheduled-flight/add-scheduled-flight.component';
import { BookingComponent } from './booking/booking.component';

import { CreateAirportComponent } from './create-airport/create-airport.component';
import { DiscountViewComponent } from './discount-view/discount-view.component';
import { DiscountsComponent } from './discounts/discounts.component';

import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { ViewAirportComponent } from './view-airport/view-airport.component';
import { ViewBookingComponent } from './view-booking/view-booking.component';
import { ViewFlightsComponent } from './view-flights/view-flights.component';
import { ViewScheduleAirlineComponent } from './view-schedule-airline/view-schedule-airline.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'booking', component: BookingComponent , canActivate : [AuthGuard]},
  { path: 'discount', component: DiscountsComponent, canActivate : [AuthGuard] },
  { path: 'viewFlight', component: ViewFlightsComponent ,canActivate : [AuthGuard]},
  { path: 'viewAirport', component: ViewAirportComponent ,canActivate : [AuthGuard]},
  { path: 'add-airport', component: CreateAirportComponent,canActivate : [AuthGuard] },
  { path: 'add-flight', component: AddFlightComponent ,canActivate : [AuthGuard]},
  { path: 'welcomeUser', component: WelcomeUserComponent ,canActivate : [AuthGuard]},
  { path: 'viewBooking', component: ViewBookingComponent ,canActivate : [AuthGuard]},
  { path: 'history', component: HistoryComponent,canActivate : [AuthGuard] },
  { path: 'view-dis', component: DiscountViewComponent ,canActivate : [AuthGuard]},
  { path: 'viewSchedule', component: ViewScheduleAirlineComponent ,canActivate : [AuthGuard]},
  { path: 'viewBooking/:bookingId', component: ViewBookingComponent ,canActivate : [AuthGuard]},
  { path: 'scheduledFlight/add:id', component: AddScheduledFlightComponent ,canActivate : [AuthGuard]},
  { path: 'scheduledFlight/adding:id', component: AddFlightComponent ,canActivate : [AuthGuard]},
  { path: 'scheduledFlight/adding', component: AddFlightComponent, canActivate : [AuthGuard] }, 
  { path: 'welcomeAdmin', component: WelcomeAdminComponent, canActivate : [AuthGuard] },

 
  
  { path: 'signup', component: SignupComponent },
  // { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'scheduledFlight/add', component: AddScheduledFlightComponent ,canActivate : [AuthGuard]},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
