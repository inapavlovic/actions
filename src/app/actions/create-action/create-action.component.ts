import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ActionService } from '../../action.service';
import { Action } from '../../action';


@Component({
  selector: 'app-create-action',
  templateUrl: './create-action.component.html',
  styles: []
})
export class CreateActionComponent implements OnInit, OnDestroy {
	@ViewChild('formObject', { static: false }) actionForm: NgForm; 
	subscription: Subscription;
	editMode = false;
	actionIndex: number;
	action: Action;

  constructor(private actionService: ActionService) { }

  ngOnInit() {
  	this.subscription = this.actionService.editing$.subscribe( (index: number) => {
  		this.actionIndex = index;
  		this.editMode = true;
  		this.action = this.actionService.getAction(index);
  		this.actionForm.setValue({
  			action: this.action.name,
  			times: this.action.times
  		});
  	} );
  }

  ngOnDestroy() {
  	this.subscription.unsubscribe();
  }

  create(form: NgForm) {
  	const newAction = new Action(form.value.action, form.value.times);
  	if (this.editMode) {
  		this.actionService.updateAction(this.actionIndex, newAction);
  	} else {
  		this.actionService.addAction(newAction);
  	}
  	this.editMode = false;
  	form.reset();
  }

  clear() {
  	this.actionForm.reset();
  	this.editMode = false;
  }

  delete() {
  	this.actionService.deleteAction(this.actionIndex);
  	this.clear();
  }

}
