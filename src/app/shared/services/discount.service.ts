import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/app-config';
import { Discount } from '../model/discount';
@Injectable({
  providedIn: 'root'
})
export class DiscountService {
 // private  baseURL = 'http://localhost:3000/discount';
  private serverURL = 'http://localhost:8081/discount';

  constructor(private httpclient: HttpClient,  ) { }
 

  createDiscount(discount: Discount): Observable<Object> {
    
    return this.httpclient.post(this.serverURL + `/save`, discount);
  }

  fetchDiscountList(): Observable<any> {
    return this.httpclient.get(this.serverURL+`/findDiscountList`);
  }
}
