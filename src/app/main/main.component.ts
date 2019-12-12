import { Component, OnInit } from "@angular/core";
import { MainService } from "./main.service";
import { Planet } from "../model";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  public spinner: boolean = true;
  public list: Planet[] = [];
  public next: any;
  public previous: any;
  public searchForm: FormControl = new FormControl("");
  constructor(private _service: MainService) {}

  ngOnInit() {
    this._service.getPlanets().subscribe(
      data => {
        console.log(data);
        this.list = data.results;
        this.next = data.next;
        this.previous = data.previous;
        this.spinner = false;
      },
      error => console.log(error)
    );
  }

  onSearchValueChanges(inputElement: HTMLInputElement) {
    this._service.searchPlanet(inputElement.value).subscribe(
      data => {
        this.next = data.next;
        this.list = data.results;
        this.previous = data.previous;
      },
      error => console.log(error)
    );
  }
  fetchNext() {
    this._service.searchPlanetByPage(this.next).subscribe(
      data => {
        this.next = data.next;
        this.list = data.results;
        this.previous = data.previous;
      },
      error => console.log(error)
    );
  }
  fetchPrev() {
    this._service.searchPlanetByPage(this.previous).subscribe(
      data => {
        this.next = data.next;
        this.list = data.results;
        this.previous = data.previous;
      },
      error => console.log(error)
    );
  }
}
