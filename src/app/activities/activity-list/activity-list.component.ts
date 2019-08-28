import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Activity } from '../activity';
import { ActivityService } from '../activity.service';


@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styles: []
})
export class ActivityListComponent implements OnInit, OnDestroy {
	activities: Activity[];
  subscription: Subscription;

  constructor(
  	private activityService: ActivityService, 
  	private router: Router, 
  	private activatedRoute: ActivatedRoute
	) { }

  ngOnInit() {
    this.subscription = this.activityService.activityChange$
      .subscribe( (activities: Activity[]) => { 
        this.activities = activities 
      } );
  	this.activities = this.activityService.getActivities();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goToCreateActivity() {
  	this.router.navigate(['create'], { relativeTo: this.activatedRoute });
  }

}
