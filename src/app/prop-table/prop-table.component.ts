
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
import {HttpClient} from '@angular/common/http';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

/**
 * @title Table retrieving data through HTTP
 */
@Component({
  selector: 'app-prop-table',
  templateUrl: './prop-table.component.html',
  styleUrls: ['./prop-table.component.scss'],
})
export class PropTableComponent implements OnInit {
  displayedColumns: string[] = ['propId', 'city', 'state', 'type'];
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

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.exampleDatabase!.getRepoIssues(
            this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.total_count;

          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => this.data = data);
  }
}

export interface GithubApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
 /*  created_at: string;
  number: string;
  state: string;
  title: string; */
  propid:number;
  propName:string;
  addsprimary:string;
  addssecondary:string;
  type:string;
  oId:number;
  city:string;
  state:string;
  pincode:number;
  room:any;
}

/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDao {
  constructor(private http: HttpClient) {}

  getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
    const href ='http://localhost:57055/api/Assests';
   // const requestUrl =`${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;

    return this.http.get<GithubApi>(href);
  }
}
