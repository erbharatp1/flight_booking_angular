import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Flight } from '../shared/model/flight';
import { AirlineService } from '../shared/services/airline.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {


  submitted = false;
  flight = new Flight();
  flightEdit = new Flight();
  flightForm: FormGroup;
  id: number;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private fb: FormBuilder, private airService: AirlineService) {

  }
  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    if (this.id != 0) {
      this.findFlightById();
    }
    this.createForm();
  }
  get f() {
    return this.flightForm.controls;
  }

  findFlightById() {
    this.airService.findFlightById(this.id).subscribe(data => {
      this.flightEdit = data;

      this.createForm();
      console.log(JSON.stringify(this.flightEdit));
    },
    error => {
     
      console.log('error');
    });
  }
  createForm() {
    this.flightForm = this.fb.group({
      carrierName: [this.flightEdit.carrierName,[Validators.required]],
      flightModel: [this.flightEdit.flightModel,[Validators.required]],
      flightNo: [this.flightEdit.id,[Validators.required]],
      price: [this.flightEdit.price,[Validators.required]],
      seatCapacity: [this.flightEdit.seatCapacity,[Validators.required]],

    },
    error => {
     
      console.log('error');
    });

  }

  onSubmit() {
    this.flight = <Flight>this.flightForm.value;

    if (this.id != 0) {
      this.flight.id = this.id;
    }
    //   this.airService.updateFlight(this.flight).subscribe(data => {
    //   });
    // } else {
      this.flight.userId = this.flight.userId;
      this.flight.createdDate = new Date();
      console.log(JSON.stringify(this.flight))
      this.airService.createflight(this.flight).subscribe(data => {
        this.submitted = true;
        this.router.navigate(['welcomeAdmin']);
        this.flightForm.reset();
      },
      error => {
       
        console.log('error');
      });
  }


  gotoList() {
    this.router.navigate(['welcomeAdmin']);
  }
}
