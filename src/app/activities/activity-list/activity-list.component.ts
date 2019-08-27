import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Activity } from '../activity';
import { ActivityService } from '../activity.service';


@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styles: []
})
export class ActivityListComponent implements OnInit {
	activities: Activity[];

  constructor(
  	private activityService: ActivityService, 
  	private router: Router, 
  	private route: ActivatedRoute
	) { }

  ngOnInit() {
  	this.activities = this.activityService.getActivities();
  }

  createActivity() {
  	this.router.navigate(['create'], { relativeTo: this.route });
  }

}
