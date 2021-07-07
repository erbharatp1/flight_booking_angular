import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Discount } from '../shared/model/discount';
import { DiscountService } from '../shared/services/discount.service';

@Component({
  selector: 'app-discount-view',
  templateUrl: './discount-view.component.html',
  styleUrls: ['./discount-view.component.css']
})
export class DiscountViewComponent implements OnInit {

   // userFilter: any = { disCode: '' };
   discountList = new Array<Discount>();
   constructor(private discountService: DiscountService, private router: Router) {
 
   }
  
 
   ngOnInit() {
     this.findDiscountList();
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
 
   goEdit(id: number) {
     this.router.navigate(['/scheduledFlight/add', { id: id }], { skipLocationChange: true });
   }
   delete(id: number) {
     // this.scheduledService.deleteSchedule(id).subscribe(item => {
     //   this.findScheduledList();
     // },
     //   error => {
 
     //     console.log('error');
     //   });
   }
   addDiscount() {
    this.router.navigate(['discount']);
  }

}
