import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @Output() emitSearch: EventEmitter<any> = new EventEmitter<any>();
  @Output() emitType: EventEmitter<any> = new EventEmitter<any>();

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search($event) {
    const search = $event.target.value;
    // this.emitSearch.emit(search);
  }

  getData(shipments: string) {
    this.emitType.emit(shipments);
  }
}
