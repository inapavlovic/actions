import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';


const routes: Routes = [
	{ path: '', redirectTo: '/activities', pathMatch: 'full' },
	{ path: 'activities', loadChildren: () => import('./activities/activities.module').then(m => m.ActivitiesModule) },
	{ path: 'actions', loadChildren: () => import('./actions/actions.module').then(m => m.ActionsModule) },
	{ path: 'auth', loadChildren: () => import('./authentication/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
