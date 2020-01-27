import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {TableService} from 'src/app/services/table.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {ThrowStmt} from '@angular/compiler';
import {Router} from '@angular/router';

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
  public sizeTable = 20;

  constructor(private tableService: TableService,
              private spinner: NgxSpinnerService,
              private router: Router) {
  }

  ngOnInit() {
    this.getData(this.type, this.headerPage, this.sizeTable);
  }

  getData(type: string, page = 1, sizeTable) {
    this.type = type;
    this.spinner.show();
    this.tableService.loadData(type, page, sizeTable).subscribe(res => {
      this.source = res['_embedded']['Source'];
      this.totalRecords = res['_total'];
      this.totalPages = res['_total_pages'];
      this.spinner.hide();
    }, err => {
      this.spinner.hide();
      console.log(err);
    });
  }

  change($event: number) {
    this.headerPage = $event;
    this.getData(this.type, this.headerPage, this.sizeTable);
  }

  search($event) {
    this.searchData = $event.value;
    this.spinner.show();
    this.tableService.search(this.searchData, this.type, this.headerPage, this.sizeTable).subscribe(res => {
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

  selectSizeTable($event: any) {
    const value = $event.target.value;
    this.sizeTable = value;
    this.getData(this.type, this.headerPage, this.sizeTable);
  }

  redirect(website: any) {
    console.log(website);
    this.router.navigate([website]);
  }

  resizeDescription(description: string) {
    console.log(description);
    if (description) {
      let val;
      const returnVal = [];
      val = description.split(' ');
      if (val.length > 38) {

      }
      // console.log(val);
      val.forEach((el, key) => {
        if (key < 45) {
          returnVal.push(el);
        } else {
          return;
        }
      });
      return returnVal;
    }
  }
}
