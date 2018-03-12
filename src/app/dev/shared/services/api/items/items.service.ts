import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ItemsService {

  private key = '4d7c90c2daa4e77fe9abfc30aafe1f3b';
  private urlSearch = 'http://food2fork.com/api/search';
  private urlGet = 'http://food2fork.com/api/get';

  constructor(private http: HttpClient) {
  }

  public search(id: string): Observable<any> {
    return this.http.get(`${this.urlSearch}?key=${this.key}`);
  }

  public get(id: string): Observable<any> {
    return  this.http.get(`${this.urlGet}?key=${this.key}&rId=${id}`);
  }
}
