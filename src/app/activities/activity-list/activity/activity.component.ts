import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Activity } from '../../activity';


@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: []
})
export class ActivityComponent implements OnInit {
	@Input() activity: Activity;
	@Input() id: number;

  constructor() { }

  ngOnInit() {
  }

}
