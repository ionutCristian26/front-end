import { Component, OnInit } from '@angular/core';
import {DatepickerOptions} from 'ngx-dates-picker';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor() { }
  model: any;
  date: any;

  ngOnInit() {
    console.log( window.innerWidth);
  }

  showDate() {
    console.log(this.date);
  }
}
