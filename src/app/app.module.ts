import { jwtInterceptor } from './_helpers/jwt.interceptor';
import { TabledataService } from './services/table-data.service';
import { rootRouterConfig } from './app.routes';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {AuthenticationService} from './services/index';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PropTableComponent } from './prop-table/prop-table.component';
import { TableComponent } from './table/table.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './_guards/index';
import{UserService} from './services/index'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminlayoutComponent } from './layout/adminlayout/adminlayout.component';
import { OwnerlayoutComponent } from './layout/ownerlayout/ownerlayout.component';
import { UserlayoutComponent } from './layout/userlayout/userlayout.component';
import{ CommonModule} from "@angular/common";
import { OwnerModule } from "./owner/owner.module";
import { AdminModule } from "./admin/admin.module";
import { VisitorModule} from './visitor/visitor.module';
import { Error404Component } from './error404/error404.component';
import { AngMatModule } from "./ang-mat/ang-mat.module";
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
    SidebarComponent,
    PropTableComponent,
    TableComponent,
    RegisterComponent,
    AdminlayoutComponent,
    OwnerlayoutComponent,
    UserlayoutComponent,
    Error404Component
   
  ],
  imports: [
    OwnerModule,
    AdminModule,
    VisitorModule,
    AngMatModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rootRouterConfig, { enableTracing: true }),
    BrowserAnimationsModule,
    BrowserModule,
    CdkTableModule,
    HttpClientModule,
    CommonModule,
  
   
  ],
  exports:[RouterModule],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
  UserService,
  AuthGuard,
  AuthenticationService,
    TabledataService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: jwtInterceptor,
        multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
