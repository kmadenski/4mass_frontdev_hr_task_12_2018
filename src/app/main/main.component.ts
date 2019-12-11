import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { MainService } from './main.service';
import { Planet } from '../dummy';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlanetDataSource } from './../PlanetDataSource';
import { MatPaginator, MatSort } from "@angular/material";
import { debounceTime, distinctUntilChanged, startWith, tap, delay } from 'rxjs/operators';
import { merge, fromEvent } from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {
  // public list: Planet[] = [];
  dataSource: PlanetDataSource;
  displayedColumns: string[] = ['name', 'climate', 'terrain', 'diameter', 'gravity'];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild('input', { static: false }) input: ElementRef;
  public searchForm: FormControl = new FormControl("")
  constructor(private _service: MainService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataSource = new PlanetDataSource(this._service);
    this.dataSource.loadPlantes(1, '');
  }
  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => this.loadPlanetsPage())
      )
      .subscribe();

    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadPlanetsPage();
        })
      )
      .subscribe();
  }

  loadPlanetsPage() {
    this.dataSource.loadPlantes(
    this.paginator.pageIndex+1,
    this.input.nativeElement.value);
  }

  onSearchValueChanges(inputElement: HTMLInputElement) {}

}
