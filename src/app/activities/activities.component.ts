import { Component, OnInit } from '@angular/core';

import { ActivityService } from './activity.service';


@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styles: [],
  providers: [ActivityService]
})
export class ActivitiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
