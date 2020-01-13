import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { TableService } from 'src/app/services/table.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() getSearch: any;

  public source;
  public totalRecords: number;
  public type = 'shipments';
  public headerPage = 1;
  public totalPages;
  public searchData: string;
  public filters = true;

  constructor(private tableService: TableService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.getData(this.type, this.headerPage);
  }

  getData(type: string, page = 1) {
    console.log(type);
    this.type = type;
    this.spinner.show();
    this.tableService.loadData(type, page).subscribe(res => {
      this.source = res['_embedded']['Source'];
      this.totalRecords = res['_total'];
      this.totalPages = res['_total_pages'];
      console.log(res);

      this.spinner.hide();
    }, err => {
      this.spinner.hide();
      console.log(err);
    });
  }

  nextPage() {
    if (this.headerPage < this.totalPages) {
      this.headerPage++;
      this.getData(this.type, this.headerPage);
    }
  }

  prevPage() {
    if (this.headerPage > 1) {
      this.headerPage--;
      this.getData(this.type, this.headerPage);
    }
  }

  change($event: number) {
    this.headerPage = $event;
    this.getData(this.type, this.headerPage);
  }

  jumpToPage($event) {
    this.headerPage = $event.target.value;
    this.getData(this.type, this.headerPage);
  }

  search($event) {
    this.searchData = $event.value;
    console.log($event);

    this.spinner.show();
    this.tableService.search(this.searchData, this.type, this.headerPage).subscribe(res => {
      console.log(res);
      this.source = res['_embedded']['Source'];
      this.totalRecords = res['_total'];
      this.totalPages = res['_total_pages'];
      this.spinner.hide();
    }, err => {
      console.log(err);
    });
  }

  showFilters($event: any) {
    console.log($event);
    this.filters = $event;
  }
}
