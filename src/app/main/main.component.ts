import { Component, OnInit } from "@angular/core";
import { MainService } from "./main.service";
import { Planet } from "../dummy";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  public list: Planet[] = [];
  public searchForm: FormControl = new FormControl("");

  constructor(private _service: MainService) {}

  ngOnInit() {
    //  this.list = this._service.list;
    // this._service.fetchPlanets().subscribe(response => {
    //   this.list = response.results;
    // });
  }

  onSearchValueChanges(inputElement: HTMLInputElement) {}
}
