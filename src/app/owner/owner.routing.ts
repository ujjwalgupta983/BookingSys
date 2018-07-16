import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerLayoutComponent } from './owner-layout/owner-layout.component';

export const OwnerRoutes:Routes =[
    {path:'owner-layout',component:OwnerLayoutComponent}
    ];
    
//taken from angular.io
//Only call RouterModule.forRoot in the root AppRoutingModule (or the AppModule if 
//that's where you register top level application routes). In any other module, you 
//must call the RouterModule.forChild method to register additional routes.
@NgModule({
  imports: [
    RouterModule.forChild(OwnerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class OwnerRoutingModule { }