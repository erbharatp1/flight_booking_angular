import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/model/user';
import { AUthGuardService } from '../shared/services/auth-guard.service';
import { UserService } from '../shared/services/user.service';
import { AuthService } from '../shared/services/_services/auth.service';
import { TokenStorageService } from '../shared/services/_services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  loginForm: FormGroup;
  user1: any;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router, private fb: FormBuilder, private userService: UserService , private authGuardService : AUthGuardService) {

  }

  ngOnInit() {
    this.createForm();

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  get f() {
    return this.loginForm.controls;
  }
  createForm() {
    this.loginForm = this.fb.group({
      username: [this.user.username, [Validators.required, Validators.minLength(3)]],
      password: [this.user.password, [Validators.required, Validators.minLength(8)]],
    })
  }

  login() {
    this.user = this.loginForm.value;
    this.authService.login(this.user).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;

       // alert("role" + this.roles[0])
        this.reloadPage();

        if (this.roles[0] == 'ROLE_ADMIN') {
          this.router.navigate(['welcomeAdmin']);
        }
        else if (this.roles[0] == 'ROLE_USER') {
          this.router.navigate(['welcomeUser']);
          this.authGuardService.sendToken(this.tokenStorage.getToken()) 
        
         
        }

        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );

    // this.userService.login(this.user).subscribe(data => {
    //   this.user1 = data;
    //  console.log(this.user1);     
    //   if (this.user1[0].roles === 'admin') {
    //     this.router.navigate(['welcomeAdmin']);
    //   }
    //   else if (this.user1[0].roles === 'user') {
    //     this.router.navigate(['welcomeUser']);
    //   }
    //   else {
    //     // alert("Something want wrong!!")
    //     //  this.router.navigate(['']);
    //   }

    // },
    //   error => {
    //     console.log("error");
    //   });

  }
  reloadPage() {
    window.location.reload();
  }
}
