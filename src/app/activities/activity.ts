import { Action } from '../action';

export class Activity {
	public name: string;
	public actions: Action[];

	constructor(name: string, actions: Action[]) {
		this.name = name;
		this.actions = actions;
	}
}