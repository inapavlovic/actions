import { Component, OnInit, Input } from '@angular/core';

import { Activity } from '../../activity';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styles: []
})
export class ActivityComponent implements OnInit {
	@Input() activity: Activity;
	@Input() id: number;

  constructor() { }

  ngOnInit() {
  }

}
