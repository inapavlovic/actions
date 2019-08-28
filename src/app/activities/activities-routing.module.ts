import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../authentication/auth.guard';
import { ActivityResolverService } from './activity-resolver.service';

import { ActivitiesComponent } from './activities.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { EmptyComponent } from './empty/empty.component';
import { CreateActivityComponent } from './create-activity/create-activity.component';


const routes: Routes = [
	{ path: '', component: ActivitiesComponent, canActivate: [AuthGuard], children: [
		{ path: '', component: EmptyComponent, resolve: { activity: ActivityResolverService } },
		{ path: 'create', component: CreateActivityComponent },
		{ path: ':id', component: ActivityDetailComponent, resolve: { activity: ActivityResolverService } },
		{ path: ':id/edit', component: CreateActivityComponent, resolve: { activity: ActivityResolverService } },
	] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule { }
