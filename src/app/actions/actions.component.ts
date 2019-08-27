import { Component, OnInit } from '@angular/core';

import { Action } from '../action';
import { ActionService } from '../action.service';


@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styles: []
})
export class ActionsComponent implements OnInit {
	actions: Action[];

  constructor(private actionService: ActionService) { }

  ngOnInit() {
  	this.actions = this.actionService.getActions();
  }

}
