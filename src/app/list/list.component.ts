import { Component, OnInit, Output, EventEmitter, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Planet, PaginationModel } from '../dummy';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    public pageNumber: number = 1;
    


  @Input()
    planetsList: Planet[] = [];
  @Input()
  showSpinner: boolean;
  @Input()
  paginationCondition: PaginationModel;
  @Input()
  isSearch: boolean;
  @Output()
  changed = new EventEmitter<number>();
  @Output()
  nextPage = new EventEmitter<string>();

  constructor(
  ) {
  }

  clickLeft() {
 
    if (this.paginationCondition.prvPageFromMainArray) {
      this.pageNumber -= 1;
      this.changed.next(this.pageNumber);
    }
  }

  clickRight() {
    if (this.paginationCondition.nextPageFromMainArray) {
      this.pageNumber += 1;
      this.changed.next(this.pageNumber);
    }
  }

  nextResult() {
    this.nextPage.next("next");
  }

  prvResult() {
    this.nextPage.next('previous');
  }


    ngOnInit() {
    

  }

}
