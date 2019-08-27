import { Injectable } from '@angular/core';

import { Action } from './action';


@Injectable({ providedIn: 'root' })
export class ActionService {

  private actions: Action[] = [ new Action('steps', 7000), new Action('duration', 30)];

	getActions() {
		return this.actions;
	}

	addAction(action: Action) {
		this.actions.push(action);
	}

	addActions(actions: Action[]) {
		this.actions.push(...actions);
	}

}
