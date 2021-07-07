import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '../shared/model/booking';
import { BookingService } from '../shared/services/booking.service';


@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  booking = new Booking();
  bookingList = new Array<Booking>();
  constructor(private bookingService: BookingService, private router: Router) {

  }

  ngOnInit() {
    this.findBookingList();

  }
  findBookingList() {
    this.bookingService.fetchBookingHistory().subscribe(data => {
      this.bookingList = data;
     // alert(JSON.stringify( this.bookingList));
    },
      error => {

        console.log('error');
      });
  }
  viewBooking(bookingId: number) {
    this.router.navigate(['/viewBooking', { empId: bookingId }], { skipLocationChange: true });
  }
 

  deleteById(id: any) {
    this.bookingService.deleteTicket(id).subscribe(item => {
       this.findBookingList();
     // this.router.navigate(['welcomeUser']);
    },
      error => {
        console.log('error');
      });
  }
}
