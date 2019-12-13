import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Planet, dummyData } from '../dummy';
import { FormControl } from '@angular/forms';
import { myapiService } from '../services/myapi.service';
import {Planets} from '../planets';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
 
  public list:Planet[] = [];
  public searchForm:FormControl = new FormControl("");
  
  constructor(private _service: MainService) {
  
   }

  ngOnInit() {
   this.list = this._service.list;
  }

  onSearchValueChanges(inputElement:HTMLInputElement){

  }
  
}
