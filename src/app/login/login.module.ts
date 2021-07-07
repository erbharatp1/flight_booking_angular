import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [
   
  ],
  imports: [
    BrowserModule,FormsModule, ReactiveFormsModule,FormsModule,FormGroup,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
