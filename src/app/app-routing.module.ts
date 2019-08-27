import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivitiesComponent } from './activities/activities.component';
import { ActionsComponent } from './actions/actions.component';
import { ActivityDetailComponent } from './activities/activity-detail/activity-detail.component';
import { EmptyComponent } from './activities/empty/empty.component';
import { CreateActivityComponent } from './activities/create-activity/create-activity.component';


const routes: Routes = [
	{ path: '', redirectTo: '/activities', pathMatch: 'full' },
	{ path: 'activities', component: ActivitiesComponent, children: [
		{ path: '', component: EmptyComponent },
		{ path: 'create', component: CreateActivityComponent },
		{ path: ':id', component: ActivityDetailComponent },
		{ path: ':id/edit', component: CreateActivityComponent },
	] },
	{ path: 'actions', component: ActionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
