import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/services/table.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public search;

  constructor(private tableService: TableService) { }

  ngOnInit() {
  }

  storeSearch($event) {
    this.search = $event;
    console.log(this.search);
    this.tableService.loadData('buyer', 1).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    } )
    
  }

}
