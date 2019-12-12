import { Component, OnInit, Input } from "@angular/core";
import { Planet } from "../model";
import { Router } from "@angular/router";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  @Input() planetsList: Planet[] = [];
  constructor(private _router: Router) {}

  ngOnInit() {}
  onSelect(planet: any) {
    this._router.navigate(["/planet", planet.name]);
  }
}
