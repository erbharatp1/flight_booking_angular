import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Discount } from '../shared/model/discount';
import { DiscountService } from '../shared/services/discount.service';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css']
})
export class DiscountsComponent implements OnInit {

  submitted = false;
  discount = new Discount();
  discountForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private discountService: DiscountService) {

  }
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.discountForm = this.fb.group({
      disCode: [this.discount.disCode],
      discription: [this.discount.discription],
      price: [this.discount.price],
    })
  }

  viewDisList(){
    this.router.navigate(['view-dis']);
  }
  onDiscount() {
    this.discount = this.discountForm.value;
    this.discount.userId = this.discount.userId;

    this.discountService.createDiscount(this.discount).subscribe(item => {
      this.submitted = true;
      this.router.navigate(['welcomeAdmin']);
    },
    error => {
      console.log('error');
    });
   
  }

  gotoList() {
    this.router.navigate(['/discounts']);
  }
  onSubmit() {
    this.router.navigate(['welcomeAdmin']);
  }

}
