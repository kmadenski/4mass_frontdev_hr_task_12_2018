import { Component, OnInit } from '@angular/core';
import { MainService } from './main.service';
import { Planet, Planets } from '../dummy';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public list:Planet[] = [];
  public searchForm:FormControl = new FormControl("")
  constructor(private _service: MainService) { }

  ngOnInit() {
   this._service.fetchPlanets().subscribe(planets => {
     this.list = planets.results
   }) 
  }

  onSearchValueChanges(inputElement:HTMLInputElement){
    if(inputElement.value !== '') {
      this.list = this.list.filter(planet => {
        return planet.name.toLocaleLowerCase().match(inputElement.value.toLocaleLowerCase())
      })
    } else {
      this.ngOnInit()
    }
  }

}
