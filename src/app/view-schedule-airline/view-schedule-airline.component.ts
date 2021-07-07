import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduledFlight } from '../shared/model/scheduled-flight';
import { ScheduledService } from '../shared/services/scheduled.service';

@Component({
  selector: 'app-view-schedule-airline',
  templateUrl: './view-schedule-airline.component.html',
  styleUrls: ['./view-schedule-airline.component.css']
})

export class ViewScheduleAirlineComponent implements OnInit {

  userFilter: any = { sourceAirport: '' };

  scheduledList = new Array<ScheduledFlight>();
  constructor(private scheduledService: ScheduledService, private router: Router) {

  }

  ngOnInit() {
    this.findScheduledList();

  }
  findScheduledList() {
    this.scheduledService.fetchScheduledFlightList().subscribe(item => {
      this.scheduledList = item;
    },
      error => {

        console.log('error');
      });
  }

  goEdit(id: number) {
    this.router.navigate(['/scheduledFlight/add', { id: id }], { skipLocationChange: true });
  }
  delete(id: number) {
    this.scheduledService.deleteSchedule(id).subscribe(item => {
      this.findScheduledList();
    },
      error => {

        console.log('error');
      });
  }

  addScheduledFlight() {
    this.router.navigate(['scheduledFlight/add']);
  }
}
