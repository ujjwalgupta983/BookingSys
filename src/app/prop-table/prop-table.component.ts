
/* import { map } from 'rxjs/operators';
import { TabledataService } from './../services/table-data.service';
import {Component,OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material';
import { Observable, Subscriber } from 'rxjs';
import { Property } from './../_models/property';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

console.log("Hello");
@Component({
  selector: 'app-prop-table',
  templateUrl: './prop-table.component.html',
  styleUrls: ['./prop-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PropTableComponent implements OnInit{
columnsToDisplay: string[] = ['propid', 'propName', 'addsprimary', 'type'];


expandedElement: Property;

dataSource = new MatTableDataSource(this.service.data);

applyFilter(filterValue: string) {this.dataSource.filter = filterValue.trim().toLowerCase();
  
}

 constructor(private service:TabledataService) {
  
  }

 ngOnInit() {
 }
}
 */
/*
import {HttpClient} from '@angular/common/http';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { Injectable } from '@angular/core';


@Component({
  selector: 'app-prop-table',
  templateUrl: './prop-table.component.html',
  styleUrls: ['./prop-table.component.scss'],
})
export class PropTableComponent implements OnInit {
  displayedColumns: string[] = ['city', 'state', 'type'];
  exampleDatabase: ExampleHttpDao | null;
  data: GithubIssue[];

  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.exampleDatabase = new ExampleHttpDao(this.http);
    merge()
      .pipe(
        startWith({}),
        switchMap(() => {
          console.log("check1");
          let b= this.exampleDatabase!.getRepoIssues();
          console.log(b);
          return b;
        }),
        map(datas => {
          console.log("check2");
          console.log(typeof(datas));
          console.log(datas);
          let b=datas.items;
          console.log("check*");
          console.log(b);
          console.log(typeof b);
          return b;

        }),
        catchError(() => {
          console.log("check3");
          return observableOf([]);
        })
      ).subscribe(res => this.data = res);
      console.log("check6");
  }
}

export interface GithubApi {
  items: GithubIssue[];

}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string; 
//  propid:number;
 // propName:string;
  //addsprimary:string;
  //addssecondary:string;
  //type:string;
  //oId:number;
 // city:string;
  //state:string;
  //pincode:number;
  //room:any;
} */

/** An example database that the data source uses to retrieve data for the table. */
/*export class ExampleHttpDao {
  constructor(private http: HttpClient) {}

 
  getRepoIssues(): Observable<GithubApi> {
    const href ='http://localhost:3000/properties';
   // const requestUrl =`${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;
   console.log("check4");
    let a= this.http.get<GithubApi>(href);
    console.log("check 5");
    console.log(typeof a);
    return a;
  }
}
*/
/*  import {HttpClient} from '@angular/common/http';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-prop-table',
  templateUrl: './prop-table.component.html',
  styleUrls: ['./prop-table.component.scss'],
  
})
export class PropTableComponent implements OnInit {
  displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  exampleDatabase: ExampleHttpDao | null;
  data: GithubIssue[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.exampleDatabase = new ExampleHttpDao(this.http);
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          let b= this.exampleDatabase!.getRepoIssues(
            this.sort.active, this.sort.direction, this.paginator.pageIndex);
            console.log("check2"+typeof b);
  console.log(b);    
            return b;  

             }),
        map(data => {
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.total_count;
        console.log(data);
        console.log("check3"+typeof data);
console.log(data.items);
          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);
      console.log("check");
      console.log(this.data);
  }
}

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}

export class ExampleHttpDao {
  constructor(private http: HttpClient) {}

  getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
    const href = 'https://api.github.com/search/issues';
    const requestUrl =
        `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;
console.log(requestUrl);
    let b= this.http.get<GithubApi>(requestUrl);
    console.log("check1");
    return b;
   
  }
}  */
import {HttpClient} from '@angular/common/http';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-prop-table',
  templateUrl: './prop-table.component.html',
  styleUrls: ['./prop-table.component.scss'],
  
})
export class PropTableComponent implements OnInit {
  displayedColumns: string[] = ['city', 'state', 'type', 'prop_name'];
  exampleDatabase: ExampleHttpDao | null;
  data: GithubIssue[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.exampleDatabase = new ExampleHttpDao(this.http);
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          let b= this.exampleDatabase!.getRepoIssues(
            this.sort.active, this.sort.direction, this.paginator.pageIndex);
            console.log("check2"+typeof b);
  console.log(b);    
            return b;  

             }),
        map(data => {
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength =5;
          console.log(data);
          console.log("check3"+typeof data);
         console.log(data.items);
          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);
      console.log("check");
      console.log(this.data);
  }
}

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  type: string;
  city: string;
  state: string;
  prop_name: string;
}

export class ExampleHttpDao {
  constructor(private http: HttpClient) {}

  getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
    const href = 'http://localhost:3000/properties';
   
    let b= this.http.get<GithubApi>(href);
    console.log(b);
    console.log("check1");
    return b;
   
  }
}