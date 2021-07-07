import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../shared/services/_services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router :Router,private tokenStorageService: TokenStorageService) { }

 
  ngOnInit(): void {
  }
  logout(){
    this.tokenStorageService.signOut();
    window.location.reload();
    this.router.navigate(['login']);
  }
}
