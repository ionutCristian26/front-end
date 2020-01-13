import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  loadData(type: string, page: number) {
    
    return this.http.get(environment.baseUrl + `manage/${ type }?page=${ page }`).pipe(map(res => {
      return res;
    }, err => {
      return err;
    }));
  }

  search(searchData: string, type: string, page: number) {
    console.log(searchData);
    
    return this.http.get(environment.baseUrl + `manage/${ type }?page=${ page }&search=${ searchData }`).pipe(map(res => {
      return res;
    }, err => {
      return err;
    }));
  }
}
