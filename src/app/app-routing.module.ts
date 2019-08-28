import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './authentication/auth.guard';
import { ActivityResolverService } from './activities/activity-resolver.service';
import { ActivitiesComponent } from './activities/activities.component';
import { ActionsComponent } from './actions/actions.component';
import { ActivityDetailComponent } from './activities/activity-detail/activity-detail.component';
import { EmptyComponent } from './activities/empty/empty.component';
import { CreateActivityComponent } from './activities/create-activity/create-activity.component';
import { AuthComponent } from './authentication/auth.component';


const routes: Routes = [
	{ path: '', redirectTo: '/activities', pathMatch: 'full' },
	{ path: 'activities', component: ActivitiesComponent, canActivate: [AuthGuard], children: [
		{ path: '', component: EmptyComponent, resolve: { activity: ActivityResolverService } },
		{ path: 'create', component: CreateActivityComponent },
		{ path: ':id', component: ActivityDetailComponent, resolve: { activity: ActivityResolverService } },
		{ path: ':id/edit', component: CreateActivityComponent, resolve: { activity: ActivityResolverService } },
	] },
	{ path: 'actions', component: ActionsComponent, canActivate: [AuthGuard] },
	{ path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
