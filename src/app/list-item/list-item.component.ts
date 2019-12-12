import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Planet } from "../model";
import { MainService } from "../main/main.service";

@Component({
  selector: "app-list-item",
  templateUrl: "./list-item.component.html",
  styleUrls: ["./list-item.component.scss"]
})
export class ListItemComponent implements OnInit {
  public spinner: boolean = true;
  public planetName: string;
  public planet: Planet[] = [];
  constructor(
    private route: ActivatedRoute,
    private _service: MainService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let name = params.get("name");
      this.planetName = name;
    });
    this._service.searchPlanet(this.planetName).subscribe(
      data => {
        this.planet = data.results;
        this.spinner = false;
        console.log(this.planet[0]);
      },
      error => console.log(error)
    );
  }
  goBack() {
    this._router.navigate(["/main"]);
  }
}
