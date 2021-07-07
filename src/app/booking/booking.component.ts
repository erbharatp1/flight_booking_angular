import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Airport } from '../shared/model/airport';
import { Booking } from '../shared/model/booking';
import { Discount } from '../shared/model/discount';
import { Flight } from '../shared/model/flight';
import { Passengers } from '../shared/model/passengers';
import { ScheduledFlight } from '../shared/model/scheduled-flight';
import { User } from '../shared/model/user';
import { AirlineService } from '../shared/services/airline.service';
import { AirportService } from '../shared/services/airport.service';
import { BookingService } from '../shared/services/booking.service';
import { DiscountService } from '../shared/services/discount.service';
import { ScheduledService } from '../shared/services/scheduled.service';
import { TokenStorageService } from '../shared/services/_services/token-storage.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  [x: string]: any;
  interviewType: string = 'IN';
  showInterviewEx: boolean;
  showInterviewIn: boolean;
  submitted = false;
  booking = new Booking();
  bookingForm: FormGroup;
  passengers = new Passengers();
  airportList = new Array<Airport>();
  passengerXRefList = new Array<Passengers>();
  passengersList = new Array<Passengers>();
  passengersListTemp = new Array<Passengers>();
  discountList = new Array<Discount>();
  scheduledList = new Array<ScheduledFlight>();
  price: number;
  totalPrice: number = 0;
  flightList = new Array<Flight>();
  @ViewChildren('flightOneTrip') flightOneTrip: QueryList<ElementRef>;
  @ViewChildren('flightRoundTrip') flightRoundTrip: QueryList<ElementRef>;
  flightId: any;
  flightIdOT: any;
  depatureOT: any;
  priceOT: any;
  flightIdRT: any;
  user= new User();
  locationList= new Array<Location>();
  constructor(private tokan :TokenStorageService,private flightSer: AirlineService, private discountService: DiscountService, private scheduledService: ScheduledService, private router: Router, private fb: FormBuilder, private bookingService: BookingService) {
   this.user  = tokan.getUser();
  
  }
  ngOnInit(): void {
    this.findScheduledList();
    this.findLocationList();
    this.findDiscountList();
    this.createForm();
  }
  findLocationList() {
    this.flightSer.fetchLocationList().subscribe(item => {
      this.locationList = item;
      console.log("location"+JSON.stringify(this.locationList))
    },
      error => {
        console.log('error');
      });
  }
  findDiscountList() {
    this.discountService.fetchDiscountList().subscribe(item => {
      this.discountList = item;
      console.log(JSON.stringify(this.discountList))
    },
      error => {

        console.log('error');
      });
  }

  findScheduledList() {
    this.scheduledService.fetchScheduledFlightList().subscribe(item => {
      this.scheduledList = item;
    },
      error => {

        console.log('error');
      });
  }

  createForm() {
    this.bookingForm = this.fb.group({
      bookingId: [this.booking.bookingId],
      journeyFromDate: [this.booking.journeyFromDate],
      noOfPassengers: [this.booking.noOfPassengers],
      price: [this.booking.price],
      mealRoundPreference: [this.booking.mealRoundPreference],
      mealOnePreference: [this.booking.mealOnePreference],
      journeyToDate: [this.booking.journeyToDate],
      destination: [this.booking.destination],
      origin: [this.booking.origin],
      discount: [this.booking.discount],
      new_passengerXRef: this.fb.array([])
    },
      error => {
        console.log('error');
      });
  }


  get new_passengerXRef() {
    return this.bookingForm.get('new_passengerXRef') as FormArray;
  }
  
  addRow(event) {
    this.new_passengerXRef.controls = [];
    this.passengerXRefList = [];
    var count = event.target.value;
    this.new_passengerXRef.removeAt(count);
    for (var i = count - 1; i >= -1; i--) {
      this.new_passengerXRef.push(this.fb.group({
        firstName: [this.passengers.firstName],
        gender: [this.passengers.gender],
        emailId: [this.passengers.emailId],
        age: [this.passengers.age],
        bookingId: [this.passengers.bookingId],
      }))
      this.new_passengerXRef.removeAt(count);
    }
    this.bookingForm.controls['price'].setValue(this.priceOT * (this.bookingForm.controls['noOfPassengers'].value));
  }

  onBooking() {
    this.booking = this.bookingForm.value;
    this.booking.userId = this.user.id;

    this.booking.trip = this.interviewType;
    this.booking.createdDate = new Date();
    this.booking.ticketStatus = "APR";
   
   var dis = this.priceOT * this.booking.noOfPassengers;
    this.booking.price = dis- this.booking.discount;

    this.booking.flightId = this.flightIdOT;
    this.booking.depature = this.depatureOT;
  
    this.passengerXRefList = <Passengers[]>this.bookingForm.value.new_passengerXRef;

    this.passengerXRefList.forEach(element => {
      element.bookingId = this.booking.bookingId;
      element.firstName = element.firstName;
      element.age = element.age;
      element.gender = element.gender;
      element.emailId = element.emailId;
      element.bookingId = 0;
    
    });
    this.booking.passengerList = this.passengerXRefList;

    this.bookingService.createBooking(this.booking).subscribe(item => {
     // this.toastr.success('Hello world!', 'Toastr fun!');
      this.router.navigate(['history']);
    },
      error => {
        console.log('error');
      });

  }

  onChangeDesirable() {
    // this.bookingForm.
    //var origin=  this.bookingForm.value();
    this.booking = this.bookingForm.value;
    this.flightSer.findFlightBySource(this.booking.origin, this.booking.destination, this.booking.journeyFromDate).subscribe(data => {
      // alert(JSON.stringify(data))
      this.flightList = data;
    })
    //console.log(JSON.stringify(this.booking))
  }
  getFlight(item: any, index: number, trip: string) {
    console.log((<any>this.flightOneTrip.toArray()).length);
    if (trip == 'OT') {
      for (let i = 0; i < (<any>this.flightOneTrip.toArray()).length; i++) {
        if (i == index) {
          (<any>this.flightOneTrip.toArray()[i]).nativeElement.style.background = '#7fc17f';
        } else {
          (<any>this.flightOneTrip.toArray()[i]).nativeElement.style.background = '#9292f5';
        }

      }
      this.flightIdOT = item.id;
      this.depatureOT = item.departure;
      this.priceOT = item.price;
    } else {
      for (let i = 0; i < (<any>this.flightRoundTrip.toArray()).length; i++) {
        if (i == index) {
          (<any>this.flightRoundTrip.toArray()[i]).nativeElement.style.background = '#7fc17f';
        } else {
          (<any>this.flightRoundTrip.toArray()[i]).nativeElement.style.background = '#9292f5';
        }

      }
      this.flightIdRT = item.id;
      this.depatureRT = item.departure;
      this.priceRT = item.price;
    }
    // this.bookingForm.controls['price'].setValue(item.price*this.bookingForm.controls['noOfPassengers'].value);
  }
  onChangeTrip(event) {
    if (event.target.value == "OT") {
      this.showInterviewEx = true;
      this.interviewType = 'OT';
    }
    if (event.target.value == "RT") {
      this.showInterviewIn = false;
      this.interviewType = 'RT';
    }

  }

  gotoList() {
    this.router.navigate(['/bookings']);
  }
  backBtn() {
    this.bookingForm.reset();
    this.router.navigate(['welcomeAdmin']);
  }
  newBooking(): void {
    this.submitted = false;

  }

  findFlightBySource(source: string, destination: string, departure: Date) {
    this.flightSer.findFlightBySource(source, destination, departure).subscribe(data => {
     // alert(JSON.stringify(data))
    })
  }

}
