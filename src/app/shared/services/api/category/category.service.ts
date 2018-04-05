import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../../models/category';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) {
  }

  public search(params: string): Observable<Category[]> {
    return this.http.get<Category[]>(`api/c?${params}`);
  }

  public get(id: string): Observable<Category> {
    return this.http.get<Category>(`api/c/${id}`);
  }

  public post(payload: any): Observable<Category> {
    return this.http.post<Category>(`api/c`, payload);
  }

  public put(id: string, payload: any): Observable<Category> {
    return this.http.put<Category>(`api/c/${id}`, payload);
  }

  public delete(id: string): Observable<any> {
    return this.http.delete(`api/c/${id}`);
  }

}
