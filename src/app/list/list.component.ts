import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { Planet } from "../dummy";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { MainService } from "../main/main.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  @Input() planetsList: Planet[] = [];
  @Input() searchForm: FormControl;
  displayedColumns: string[] = [
    "name",
    "climate",
    "terrain",
    "diameter",
    "gravity"
  ];
  dataSource;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private _service: MainService) {}

  ngOnInit() {
    this._service.fetchPlanets().subscribe(response => {
      this.dataSource = new MatTableDataSource<Planet>(response.results);
      this.dataSource.paginator = this.paginator;

      this.searchForm.valueChanges.subscribe(val => this.applyFilter(val));
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
