import { Component, OnInit, Input, ViewChild } from '@angular/core';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { myapiService } from '../services/myapi.service';
import {Planets} from '../planets';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
Columns: string[] = ['Name', 'Climate', 'Terrain', 'Diameter', 'Gravity'];
dataSource;



@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  constructor(private _myapiService: myapiService, private translate: TranslateService) {
    translate.setDefaultLang('pl');
   }
   

  @Input() planetslist1: Planets[] = [];

  ngOnInit() {
     this._myapiService.getPlanets().subscribe(data => {
      this.dataSource = new MatTableDataSource(data.results);
      this.dataSource.paginator = this.paginator;
     });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
