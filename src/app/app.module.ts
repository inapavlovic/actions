import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptorService } from './authentication/auth-interceptor.service';

import { NavigationComponent } from './navigation/navigation.component';
import { ActionsComponent } from './actions/actions.component';
import { CreateActionComponent } from './actions/create-action/create-action.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CreateActivityComponent } from './activities/create-activity/create-activity.component';
import { ActivityListComponent } from './activities/activity-list/activity-list.component';
import { ActivityComponent } from './activities/activity-list/activity/activity.component';
import { ActivityDetailComponent } from './activities/activity-detail/activity-detail.component';
import { EmptyComponent } from './activities/empty/empty.component';
import { AuthComponent } from './authentication/auth.component';


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
    EmptyComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
