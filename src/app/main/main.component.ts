import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Planet, DataModel, PaginationModel } from '../dummy';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  subscription?: Subscription;


  public paginationCondition: PaginationModel = {
    nextPageFromMainArray: "",
    prvPageFromMainArray: "",
    nextPageFromSearch: "",
    prvPageFromSearch: ""
  }
  public showSpinner: boolean = true;
  public isSearch: boolean = false;
  public pageNumber: number = 1;
  public list: Planet[] = [];
  public searchForm: FormControl = new FormControl("");

  constructor(private _service: MainService) {}


  getData(pageNumber: number) {
    this.showSpinner = true;

    this.subscription = this._service.getPlanet(pageNumber).subscribe(
      (data) => {
        this.list = data.results;
        this.showSpinner = false;
        this.paginationCondition.nextPageFromMainArray = data.next;
        this.paginationCondition.prvPageFromMainArray = data.previous;
      },
      (e) => {
        this.showSpinner = false;
        console.log(`errro is ${e}`);
      },
      () => {
      }
    );
  }


  getDataFromSearch(val, next?) {
    this.isSearch = true;
    this.showSpinner = true;
    this.subscription.unsubscribe();
    this.subscription = this._service.searchPlanet(val, next).subscribe(
      (data) => {
        this.list = data.results;
        this.showSpinner = false;
        this.paginationCondition.nextPageFromSearch = data.next;
        this.paginationCondition.prvPageFromSearch = data.previous;
      },
      (e) => {
        this.showSpinner = false;
        console.log(`errro is ${e}`);
      },
      () => {}
    );
  }


  pageChanged(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.getData(this.pageNumber);
  }


  nextPage(event: string) {
    if (event === "next") {
      this.getDataFromSearch('', this.paginationCondition.nextPageFromSearch);
    }
    if (event === "previous") this.getDataFromSearch('', this.paginationCondition.prvPageFromSearch);

  }
    

  ngOnInit() {
    this.getData(this.pageNumber);
  }

  onSearchValueChanges(inputElement: HTMLInputElement) {
    this.getDataFromSearch(inputElement.value);
  }

}
