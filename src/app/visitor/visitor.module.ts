import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorLayoutComponent } from './visitor-layout/visitor-layout.component';
import { VisitorRoutingModule } from "../visitor/visitor.routing";
import { NavbarComponent } from '../navbar/navbar.component';
import { PropdetailsComponent } from './propdetails/propdetails.component';
import { PropSearchComponent } from './prop-search/prop-search.component';
import {AngMatModule} from '../ang-mat/ang-mat.module';
import{RouterModule} from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    VisitorRoutingModule,
    AngMatModule,
    RouterModule
  ],
  declarations: [
    VisitorLayoutComponent,
    NavbarComponent,
    PropdetailsComponent,
    PropSearchComponent
  ]
})
export class VisitorModule { }
