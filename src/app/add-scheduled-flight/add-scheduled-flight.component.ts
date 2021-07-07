import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../shared/model/flight';
import { ScheduledFlight } from '../shared/model/scheduled-flight';
import { AirlineService } from '../shared/services/airline.service';

import { ScheduledService } from '../shared/services/scheduled.service';


@Component({
  selector: 'app-add-scheduled-flight',
  templateUrl: './add-scheduled-flight.component.html',
  styleUrls: ['./add-scheduled-flight.component.css']
})
export class AddScheduledFlightComponent implements OnInit {
  scheduledFlightEdit = new ScheduledFlight();
  scheduledForm: FormGroup;
  scheduledFlight = new ScheduledFlight();
  flightList = new Array<Flight>();
  id: number;
  locationList= new Array<Location>();
  constructor(private scheduleService: ScheduledService, private airlineService: AirlineService, private activatedRoute: ActivatedRoute, private router: Router, private fb: FormBuilder, private scheduledFlightService: ScheduledService) {

    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
     
  }

  ngOnInit() {
    this.findLocationList();
    this.findFlightLIst();
    if (this.id != 0) {
      this.findScheduleById();
    }
    this.createForm();
  }
  findLocationList() {
    this.airlineService.fetchLocationList().subscribe(item => {
      this.locationList = item;
      console.log("location"+JSON.stringify(this.locationList))
    },
      error => {
        console.log('error');
      });
  }
  createForm() {
    this.scheduledForm = this.fb.group({
      availableSeats: [this.scheduledFlightEdit.availableSeats, [Validators.required]],
      // scheduleFlightId: [this.scheduledFlightEdit.scheduleFlightId ,[Validators.required]],
      sourceAirport: [this.scheduledFlightEdit.sourceAirport, [Validators.required]],
      destination: [this.scheduledFlightEdit.destination, [Validators.required]],
      arrival: [this.scheduledFlightEdit.arrival, [Validators.required]],
      departure: [this.scheduledFlightEdit.departure, [Validators.required]],
      departureTime: [this.scheduledFlightEdit.departureTime, [Validators.required]],
      flightId: [this.scheduledFlightEdit.flightId, [Validators.required]],
      arrivalTime: [this.scheduledFlightEdit.arrivalTime, [Validators.required]],
      
    })

  }
  findScheduleById() {
    this.scheduleService.findScheduleById(this.id).subscribe(data => {
      this.scheduledFlightEdit = data;
      
      this.createForm();
      console.log(JSON.stringify(this.scheduledFlightEdit));
    })
  }

  OnSubmit() {
    console.log(this.scheduledForm)
    this.scheduledFlight = <ScheduledFlight>this.scheduledForm.value;
    
    if (this.id != 0) {
      this.scheduledFlight.scheduleFlightId = this.id;
      this.scheduledFlight.updateDate = new Date();
    }
    this.scheduledFlightService.createScheduledFlight(this.scheduledFlight).subscribe(data => {
    });
    console.log("scheduledFlight Register Successfully!!" + JSON.stringify(this.scheduledFlight))

    this.router.navigate(['welcomeAdmin']);
  }
  findFlightLIst() {
    this.airlineService.fetchFlightList().subscribe(data => {
      this.flightList = data;
      console.log(JSON.stringify(this.flightList));
    })
  }
  backBtn() {
    this.router.navigate(['welcomeAdmin']);
  }
  get f() {
    return this.scheduledForm.controls;
  }
}
