import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OwnerRoutingModule} from './owner.routing';
import { OwnerLayoutComponent } from './owner-layout/owner-layout.component';
import { OwnerNavComponent } from './owner-nav/owner-nav.component';
import { OwnerSidenavComponent } from './owner-sidenav/owner-sidenav.component';
import {AngMatModule} from '../ang-mat/ang-mat.module';
import {UserProfileComponent} from '../user-profile/user-profile.component';
@NgModule({
  imports: [
    CommonModule   ,
    OwnerRoutingModule,
    AngMatModule,
    ],
  declarations: 
  [
    OwnerLayoutComponent,
    OwnerNavComponent,
    OwnerSidenavComponent,
    UserProfileComponent
  ]

})
export class OwnerModule { }
