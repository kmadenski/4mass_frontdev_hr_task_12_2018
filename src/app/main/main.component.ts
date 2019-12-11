import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Planet } from '../dummy';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public list:Planet[] = [];
  public next: any;
  public searchForm:FormControl = new FormControl("")
  constructor(private _service: MainService) { }

  ngOnInit() {
  //  this.list = this._service.list;
  this._service.getPlanets().subscribe(
    data => {
      console.log(data)
      this.list = data.results
      this.next = data.next
      },
    error => console.log(error)
  )
   
  }

  onSearchValueChanges(inputElement:HTMLInputElement){
  this._service.searchPlanet(inputElement.value).subscribe(
    data => {
    this.next = data.next
    this.list = data.results
    }
    ,
    error => console.log(error)
    )
  }
}
