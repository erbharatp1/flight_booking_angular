import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Airport } from '../shared/model/airport';
import { AirportService } from '../shared/services/airport.service';


@Component({
  selector: 'app-create-airport',
  templateUrl: './create-airport.component.html',
  styleUrls: ['./create-airport.component.css']
})
export class CreateAirportComponent implements OnInit {
  
  
  submitted = false;
  airport = new Airport();
  airportForm:FormGroup;

  constructor(private router:Router, private fb: FormBuilder, private airportService: AirportService) { 
   
  }
  ngOnInit(): void {
   this.createForm();
  }

    createForm() {
    this.airportForm = this.fb.group({
      airportCode: [this.airport.airportCode],
      airportName: [this.airport.airportName],
      airportLocation: [this.airport.airportLocation],
      })

  }

  

  onAirport() {
    this.airport = this.airportForm.value;
    this.airport.userId = this.airport.userId;
    this.airport.createdDate = new Date();
   
    this.airportService.createAirport(this.airport).subscribe(item=>{

    },
    error => {
     
      console.log('error');
    });
    this.submitted = true;
    this.router.navigate(['welcomeAdmin']);
  }

  gotoList() {
    this.router.navigate(['/airports']);
  }
  onSubmit() {
    this.router.navigate(['welcomeAdmin']);
  }
 
}
