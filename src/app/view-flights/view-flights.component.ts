import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../shared/model/flight';
import { AirlineService } from '../shared/services/airline.service';
@Component({
  selector: 'app-view-flights',
  templateUrl: './view-flights.component.html',
  styleUrls: ['./view-flights.component.css']
})
export class ViewFlightsComponent implements OnInit {
  userFilter: any = { sourceAirport: '' };
  flightList = new Array<Flight>();
  flight = new Flight();
  constructor(private airlineService: AirlineService, private router: Router) { }

  ngOnInit() {
    this.findFlightLIst();
  }
  findFlightLIst() {
    this.airlineService.fetchFlightList().subscribe(data => {
      this.flightList = data;
      
    },
      error => {

        console.log('error');
      });
  }
  addFlight() {
    this.router.navigate(['add-flight']);

  }

  goEdit(id: number) {
    this.router.navigate(['/scheduledFlight/adding', { id: id }], { skipLocationChange: true });
  }
  updateFlight(id: number) {
    
    this.flight.id = id;
    this.flight.activeStatus = "AC";
    this.airlineService.updateFlight(this.flight).subscribe(item => {
      this.findFlightLIst();
    },
      error => {
        console.log('error');
      });
  }
  updateFlightBlock(id: number) {
    
    this.flight.id = id;
    this.flight.activeStatus = "DE";
    this.airlineService.updateFlight(this.flight).subscribe(item => {
      this.findFlightLIst();
    },
      error => {
        console.log('error');
      });
      this.findFlightLIst();
  }
}
