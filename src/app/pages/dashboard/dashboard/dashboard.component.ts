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
}
