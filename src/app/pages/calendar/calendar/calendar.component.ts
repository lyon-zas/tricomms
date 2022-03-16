import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  selected: Date | null | any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  routeToChannel(){
    this.router.navigate(['/pages/channels'], {relativeTo: this.route});
  }
  ngOnInit(): void {
  }

}
