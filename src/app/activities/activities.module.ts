import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ActivitiesRoutingModule } from './activities-routing.module';

import { ActivitiesComponent } from './activities.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityComponent } from './activity-list/activity/activity.component';
import { EmptyComponent } from './empty/empty.component';
import { CreateActivityComponent } from './create-activity/create-activity.component';


@NgModule({
  declarations: [
    ActivitiesComponent,
    ActivityDetailComponent,
    ActivityListComponent,
    ActivityComponent,
    EmptyComponent,
    CreateActivityComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ActivitiesRoutingModule
  ]
})
export class ActivitiesModule { }
