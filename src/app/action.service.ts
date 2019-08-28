import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Action } from './action';


@Injectable({ providedIn: 'root' })
export class ActionService {
	editing$ = new Subject<number>();

  private actions: Action[] = [];

	getAction(index: number) {
		return this.actions[index];
	}

	getActions() {
		return this.actions;
	}

	addAction(action: Action) {
		this.actions.push(action);
	}

	addActions(actions: Action[]) {
		this.actions.push(...actions);
	}

	updateAction(index: number, newAction: Action) {
		this.actions[index] = newAction;
	}

	deleteAction(index: number) {
		this.actions.splice(index, 1);
	}

}
