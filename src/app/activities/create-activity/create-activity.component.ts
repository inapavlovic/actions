import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Activity } from '../activity';
import { ActivityService } from '../activity.service';


@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styles: []
})
export class CreateActivityComponent implements OnInit {
	id: number;
	editMode = false;

  constructor(private activatedRoute: ActivatedRoute, private activityService: ActivityService) { }

  ngOnInit() {
  	this.activatedRoute.paramMap.subscribe( parameters => {
  		this.id = +parameters.get('id');
  		this.editMode = parameters.get('id') != null; // create or edit
  	} );
  }

}
