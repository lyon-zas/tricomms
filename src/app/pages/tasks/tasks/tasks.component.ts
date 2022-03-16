import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  routeToChannel(){
    this.router.navigate(['/pages/channels'], {relativeTo: this.route});
  }
  ngOnInit(): void {
  }

}
