import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../shared/model/booking';
import { Passengers } from '../shared/model/passengers';
import { BookingService } from '../shared/services/booking.service';

@Component({
  selector: 'app-view-booking',
  templateUrl: './view-booking.component.html',
  styleUrls: ['./view-booking.component.css']
})
export class ViewBookingComponent implements OnInit {
  bookingId: Number;
  booking: Booking;
  passengerList = new Array<Passengers>();
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private bookingService: BookingService) {

    this.bookingId = Number(this.activatedRoute.snapshot.paramMap.get('empId'));

  }

  ngOnInit() {
    this.FindBookingList();
    this.booking = new Booking();
    this.bookingService.fetchBooking(this.bookingId)
      .subscribe(data => {
        this.booking = data;
        this.passengerList = data.passengerList;
        
      },
        error => console.log(error));

  }
  list() {
    this.router.navigate(['history']);
  }

  FindBookingList() {
    this.bookingService.FindBookingList().subscribe(item => {

    },
      error => {

        console.log('error');
      });
  }
}
