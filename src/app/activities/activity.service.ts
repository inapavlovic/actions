import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Activity } from './activity';
import { Action } from '../action';
import { ActionService } from '../action.service';


@Injectable({ providedIn: 'root' })
export class ActivityService {
	private activities: Activity[] = [ new Activity('walk', [ new Action('steps', 4000)]), new Activity('run', [])];
  activityChange$ = new Subject<Activity[]>();

  constructor(private actionService: ActionService) { }

	getActivity(index: number) {
		return this.activities[index];
	}

  getActivities() {
  	return [...this.activities];
  }

  addActions(actions: Action[]) {
  	this.actionService.addActions(actions);
  }

  addActivity(activity: Activity) {
    this.activities.push(activity);
    this.activityChange$.next([...this.activities]);
  }

  updateActivity(index: number, newActivity: Activity) {
    this.activities[index] = newActivity;
    this.activityChange$.next([...this.activities]);
  }

  deleteActivity(index: number) {
    this.activities.splice(index, 1);
    this.activityChange$.next([...this.activities]);
  }
}
