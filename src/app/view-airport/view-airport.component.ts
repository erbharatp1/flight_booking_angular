import { Component, OnInit } from '@angular/core';
import { Airport } from '../shared/model/airport';
import { AirportService } from '../shared/services/airport.service';

@Component({
  selector: 'app-view-airport',
  templateUrl: './view-airport.component.html',
  styleUrls: ['./view-airport.component.css']
})
export class ViewAirportComponent implements OnInit {
   
  airportList = new Array<Airport>();
  constructor(private airportService: AirportService) { }

  ngOnInit() {
    this.getAirportList();
  }

  getAirportList() {

    this.airportService.fetchAirportList().subscribe(item => {
      this.airportList = item;
    },
    error => {
     
      console.log('error');
    });

  } 
}
