import { LayoutComponent } from './layout/layout.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './_guards/index';
import {CommonModule} from '@angular/common';
import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';


export const rootRouterConfig: Routes = [
 {path:'', component:HomeComponent/* ,canActivate: [AuthGuard] */},
 {path:'login',component:LoginComponent},
 {path:'register', component:RegisterComponent},
 {path:'layout',component:LayoutComponent}
 
];
export const routing = RouterModule.forRoot(rootRouterConfig);
 