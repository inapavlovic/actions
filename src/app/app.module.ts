import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ActionsComponent } from './actions/actions.component';
import { CreateActionComponent } from './actions/create-action/create-action.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CreateActivityComponent } from './activities/create-activity/create-activity.component';
import { ActivityListComponent } from './activities/activity-list/activity-list.component';
import { ActivityComponent } from './activities/activity-list/activity/activity.component';
import { ActivityDetailComponent } from './activities/activity-detail/activity-detail.component';
import { EmptyComponent } from './activities/empty/empty.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ActionsComponent,
    CreateActionComponent,
    ActivitiesComponent,
    CreateActivityComponent,
    ActivityListComponent,
    ActivityComponent,
    ActivityDetailComponent,
    EmptyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
