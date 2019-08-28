import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ActivitiesComponent } from './activities/activities.component';
import { ActionsComponent } from './actions/actions.component';


const routes: Routes = [
	{ path: '', redirectTo: '/activities', pathMatch: 'full' },
	{ path: 'activities', loadChildren: './activities/activities.module#ActivitiesModule' },
	{ path: 'actions', loadChildren: './actions/actions.module#ActionsModule' },
	{ path: 'auth', loadChildren: './authentication/auth.module#AuthModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
