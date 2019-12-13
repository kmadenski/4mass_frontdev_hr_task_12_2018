import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [MainService]
})
export class MainComponent implements OnInit {
  public list = [];
  public searchForm:FormControl = new FormControl("");
  public searches: string[] = [];
  constructor(private mainService: MainService) { };

  ngOnInit() {
    this.mainService.getData().subscribe(
      (data) => this.list = (data.results)
   )
  }

  onSearchValueChanges(term:HTMLInputElement){
    this.searchForm.valueChanges.subscribe(
      (term) => {
          let result = this.list.filter((item) => {
            return item.name.toLowerCase().includes(term.toLowerCase())
          })
          if (term.length >=1){
            this.list = result
          } else {
            return this.list
          }
        });
  }
}
