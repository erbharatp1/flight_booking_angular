import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AUthGuardService {

  router : Router
  constructor(router : Router, private tokenStorageService : TokenStorageService) {
    this.router = router
  }

  getToken(){        
    console.log(" this.tokenStorageService.getToken() :"+this.tokenStorageService.getToken())
    // return window.sessionStorage.getItem("LoggedInUse r")   --  for now we can check the token as null to return boolean value, after soem time we need to parse jwt here to cvheck if the user is valid or not
    return this.tokenStorageService.getToken()
  }

  sendToken(token: string) {

    localStorage.setItem("LoggedInUser", token)
  }

  isLoggednIn() {
    return this.getToken() ? true : false;
  }

  logout() {
    localStorage.clear()
   // this.router.navigate(["login"]);
  }

  isAdminLoggedIn(){
    return localStorage.getItem('role') !== null && localStorage.getItem('role') === 'admin' 
  }
}
