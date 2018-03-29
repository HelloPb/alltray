import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Item } from '../../../models/items';

@Injectable()
export class ItemsService {

  constructor(private http: HttpClient) {
  }

  public search(params: string): Observable<Item[]> {
    return this.http.get<Item[]>(`api/p?${params}`);
  }

  public get(id: string): Observable<Item> {
    return this.http.get<Item>(`api/p/${id}`);
  }

  public post(payload: any): Observable<Item> {
    return this.http.post<Item>(`api/p`, payload);
  }

  public put(id: string, payload: any): Observable<Item> {
    return this.http.put<Item>(`api/p/${id}`, payload);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`api/p/${id}`);
  }

}
