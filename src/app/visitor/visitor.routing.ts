import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorLayoutComponent } from './visitor-layout/visitor-layout.component';
import { PropdetailsComponent } from './propdetails/propdetails.component';

export const VisitorRoutes:Routes =[
    {path:'visitor-layout', component:VisitorLayoutComponent},
    {path:'search', component:PropdetailsComponent}
    ];
@NgModule({
  imports: [
    RouterModule.forChild(VisitorRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class VisitorRoutingModule { }