import { Injectable } from '@angular/core';

import { Activity } from './activity';
import { Action } from '../action';
import { ActionService } from '../action.service';


@Injectable()
export class ActivityService {
	private activities: Activity[] = [ new Activity('walk', [ new Action('steps', 4000)]), new Activity('run', [])];

  constructor(private actionService: ActionService) { }

	getActivity(id: number) {
		return this.activities[id];
	}

  getActivities() {
  	return this.activities;
  }

  addActions(actions: Action[]) {
  	this.actionService.addActions(actions);
  }
}
