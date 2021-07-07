import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-welcome-admin',
  templateUrl: './welcome-admin.component.html',
  styleUrls: ['./welcome-admin.component.css']
})
export class WelcomeAdminComponent implements OnInit {
  closeResult = '';
  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit()  {
  }

  addScheduledFlight() {
    this.router.navigate(['scheduledFlight/add']);
  }

  
  searchScheduledFlight() {
      this.router.navigate(['scheduledFlight/search']);
  }

  modifyScheduledFlight() {
    this.router.navigate(['scheduledFlight/modify']);
  }


  addFlight(content) {
    this.router.navigate(['add-flight']);
    // this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    //   this.closeResult = `Closed with: ${result}`;
    // }, (reason) => {
    //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    // });
  }
  signUp(){
    this.router.navigate(['login']);
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  viewFlight(){
    this.router.navigate(['/viewFlight']);
  }
  viewSchedule(){
    this.router.navigate(['viewSchedule']);
  }
  addAirport() {
    this.router.navigate(['add-airport']);
  }

  viewAirport() {
    this.router.navigate(['viewAirport']);
  }
  
  logout(){
    this.router.navigate(['']);
  }
  viewDiscount() {
    this.router.navigate(['view-dis']);
  }
  booking() {
    this.router.navigate(['booking']);
  }
  
}
