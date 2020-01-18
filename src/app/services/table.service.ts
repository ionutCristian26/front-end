import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  public baseUrl = 'https://shipments-api.osc-fr1.scalingo.io/';

  constructor(private http: HttpClient) { }

  loadData(type: string, page: number, sizeTable: number) {
    return this.http.get(this.baseUrl + `manage/${ type }?page=${ page }&_limit=${sizeTable}`).pipe(map(res => {
      return res;
    }, err => {
      return err;
    }));
  }

  search(searchData: string, type: string, page: number, sizeTable: number) {
    return this.http.get(this.baseUrl + `manage/${ type }?page=${ page }&search=${ searchData }&_limit=${sizeTable}`).pipe(map(res => {
      return res;
    }, err => {
      return err;
    }));
  }
}
