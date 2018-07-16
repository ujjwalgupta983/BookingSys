import { RouterModule, Routes } from '@angular/router';
import { OwnerLayoutComponent } from './owner/owner-layout/owner-layout.component';
import {VisitorLayoutComponent} from './visitor/visitor-layout/visitor-layout.component';
import{AdminLayoutComponent} from './admin/admin-layout/admin-layout.component';
import{Error404Component} from './error404/error404.component';
import { AuthGuard } from './_guards';
export const rootRouterConfig: Routes = [
/*  {path:'', component:HomeComponent ,canActivate: [AuthGuard] }, 
{ path: '', redirectTo: '/owner', pathMatch: 'full' },
 {path:'login',component:LoginComponent},
 {path:'register', component:RegisterComponent},
 {path:'layout',component:LayoutComponent},
 {path:'admin',canActivate:[AuthGuard],loadChildren:'./admin/admin.module#AdminModule'},
 {path:'owner',loadChildren:'./owner/owner.module#OwnerModule'},
 {path:'visitor' ,loadChildren:'./visitor/visitor.module#visitorModule'},*/
 {
    path:'',
    redirectTo: 'visitor-layout',
    pathMatch: 'full',
  }, {
    path: 'owner-layout',
    component: OwnerLayoutComponent,
    canActivate: [AuthGuard] , 
    children: [
        {
      path: '',
      loadChildren: './owner/owner.module#OwnerModule'
  }]},
  {
      path:'visitor-layout',
      component:VisitorLayoutComponent,
      children: [
        {
      path: '',
      loadChildren: './visitor/visitor.module#VisitorModule'
  }]
    },
    {
        path:'admin-layout',
        component:AdminLayoutComponent,
        canActivate:[AuthGuard],
        children: [
          {
        path: '',
        loadChildren: './admin/admin.module#AdminModule'
    }]
      },
      {path:'**',component:Error404Component},
 
  

 ];
export const routing = RouterModule.forRoot(rootRouterConfig);
 