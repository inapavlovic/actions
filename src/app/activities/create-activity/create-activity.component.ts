import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { Activity } from '../activity';
import { ActivityService } from '../activity.service';


@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styles: ['input.ng-invalid.ng-touched { border: 1px solid red; }']
})
export class CreateActivityComponent implements OnInit {
	id: number;
	editMode = false;
  activityForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private activityService: ActivityService, 
    private router: Router
  ) { }

  ngOnInit() {
  	this.activatedRoute.paramMap.subscribe( parameters => {
  		this.id = +parameters.get('id');
  		this.editMode = parameters.get('id') != null; // create or edit
      this.initForm();
  	} );
  }

  submit() {
    if (this.editMode) {
      // const newActivity = new Activity(this.activityForm.value['name'], this.activityForm.value['actions']);
      this.activityService.updateActivity(this.id, this.activityForm.value);
    } else {
      this.activityService.addActivity(this.activityForm.value);
    }
    this.cancel();
  }

  addAction() {
    // cast to FormArray
    (<FormArray>this.activityForm.get('actions')).push( new FormGroup({
      'name': new FormControl(null, Validators.required),
      'times': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }

  deleteAction(index: number) {
    (<FormArray>this.activityForm.get('actions')).removeAt(index);
  }

  cancel() {
    // Navigate up one level
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }

  private initForm() {
    let name = '';
    let activityActions = new FormArray([]);

    if (this.editMode) {
      const activity = this.activityService.getActivity(this.id);
      name = activity.name;
      if (activity['actions']) {
        for (let action of activity.actions) {
          activityActions.push( new FormGroup({
            'name': new FormControl(action.name, Validators.required),
            'times': new FormControl(action.times, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
          }));
        }
      }
    }

    this.activityForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'actions': activityActions
    });
  }


}
