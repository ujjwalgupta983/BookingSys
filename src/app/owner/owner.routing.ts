import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserProfileComponent} from '../user-profile/user-profile.component';
import{OwnerLayoutComponent} from "./owner-layout/owner-layout.component";
export const OwnerRoutes:Routes =[
   {path:'Owner-layout',component:OwnerLayoutComponent}
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