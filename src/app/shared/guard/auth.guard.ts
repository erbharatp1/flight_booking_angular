import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AUthGuardService } from '../services/auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  router : Router
  constructor(private myrouter : Router ,private authGuardServie : AUthGuardService){
    this.router = myrouter
    console.log("Authguard contructor")
  }
  canActivate(): boolean {
    console.log("Authguard canActivate")

    if (this.authGuardServie.isLoggednIn()){
      console.log("Cheking isLoggednIn...")
      return true;
    }    
    else{
      this.router.navigate(["/login"]);
      return false;
    }
      
  }

  // Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

}
  