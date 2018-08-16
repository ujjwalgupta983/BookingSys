import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserProfileComponent} from '../user-profile/user-profile.component';
export const OwnerRoutes:Routes =[
   {path:'user-profile',component:UserProfileComponent}
 ];
@NgModule({
  imports: [
    RouterModule.forChild(OwnerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class OwnerRoutingModule { }