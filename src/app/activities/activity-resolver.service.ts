import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Activity } from './activity';
import { DataService } from '../data.service';
import { ActivityService } from './activity.service';

@Injectable({ providedIn: 'root' })
export class ActivityResolverService implements Resolve<Activity[]> {

  constructor(private dataService: DataService, private activityService: ActivityService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  	const activities = this.activityService.getActivities();

  	if (activities.length === 0) {
	  	return this.dataService.fetchActivities();
  	} else { return activities; }
  }
}
