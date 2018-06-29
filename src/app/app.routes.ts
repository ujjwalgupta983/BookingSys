import { LayoutComponent } from './layout/layout.component';
//import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

import { Component } from '@angular/core';


export const rootRouterConfig: Routes = [
 {path:'', component:HomeComponent},
 //{path:'register', component:RegisterComponent},
 {path:'layout',component:LayoutComponent}
];
export const routing = RouterModule.forRoot(rootRouterConfig);
 