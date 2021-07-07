import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [],
 
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule,FormGroup,
    AppRoutingModule,CommonModule
  ],
})
export class SignupModule { }
