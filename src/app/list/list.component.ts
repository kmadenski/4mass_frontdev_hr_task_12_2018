import { Component, OnInit, Input } from '@angular/core';
import {AfterViewInit, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
@Input() planetsList = [];
  constructor() { }

  ngOnInit() {
  }
}
