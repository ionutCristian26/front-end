import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchEmitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() filterShow: EventEmitter<any> = new EventEmitter<any>();

  public filters = false;

  constructor() { }

  ngOnInit() {
  }

  search(value, country) {
    const search = {
      value: (value.length !== 0) ? value : '',
      country: (country.length !== 0) ? country : '',
    }
    this.searchEmitter.emit(search);
  }

  showFilters() {
    this.filterShow.emit(!this.filters);
  }
}
