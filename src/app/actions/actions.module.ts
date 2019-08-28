import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../authentication/auth.guard';

import { ActionsComponent } from './actions.component';
import { CreateActionComponent } from './create-action/create-action.component';


@NgModule({
  declarations: [
		ActionsComponent,
		CreateActionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
    	{ path: '', component: ActionsComponent, canActivate: [AuthGuard] }	
    ])
  ]
})
export class ActionsModule { }
