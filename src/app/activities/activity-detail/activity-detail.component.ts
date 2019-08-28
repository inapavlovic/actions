import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Activity } from '../activity';
import { ActivityService } from '../activity.service';


@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styles: []
})
export class ActivityDetailComponent implements OnInit {
	activity: Activity;
	id: number;

  constructor(
  	private activityService: ActivityService, 
  	private activatedRoute: ActivatedRoute, 
  	private router: Router
  ) { }

  ngOnInit() {
  	this.activatedRoute.paramMap.subscribe( parameters => {
  		this.id = +parameters.get('id');
  		this.activity = this.activityService.getActivity(this.id);
  	} );
  }

  addToActions() {
    this.activityService.addActions(this.activity.actions);
  }

  editActivity() {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
  }

  deleteActivity() {
    this.activityService.deleteActivity(this.id);
    this.router.navigate(['/activities']);
  }

}
