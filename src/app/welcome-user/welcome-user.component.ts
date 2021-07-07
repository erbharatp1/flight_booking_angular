import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-user',
  templateUrl: './welcome-user.component.html',
  styleUrls: ['./welcome-user.component.css']
})
export class WelcomeUserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  history(): void{
    this.router.navigate(['history']);
  }

  logout(){
    this.router.navigate(['']);
  }
  
  booking(): void{
    this.router.navigate(['booking']);
  }
  
}
