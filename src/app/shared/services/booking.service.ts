import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/app-config';
import { Booking } from '../model/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  //private baseURL = 'http://localhost:3000';
  private serverURL = 'http://localhost:8081/booking';

  constructor(private httpclient: HttpClient,) { }

  createBooking(booking: Booking): Observable<Object> {
    alert(JSON.stringify(booking))
    return this.httpclient.post(this.serverURL + `/save`, booking);
  }
  deleteTicket(id: number): Observable<any> {
    return this.httpclient.delete(this.serverURL + `/delete/${id}`, { responseType: 'text' });
  }
   


  fetchBookingHistory(): Observable<any> {

    return this.httpclient.get(`http://localhost:8081/booking/findBookingList`);
  }
  fetchBooking(id: Number): Observable<any> {
    return this.httpclient.get(this.serverURL + `/findBookingById/${id}`);
  }
  FindBookingList(): Observable<any> {
    return this.httpclient.get(`http://localhost:8081/flight/booking/findBookingList`);
  }
}
