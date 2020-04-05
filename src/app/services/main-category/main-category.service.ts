import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MainCategoryService {

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${environment.baseUrl}/admin/categories`);
  }
  create(body) {
    return this.http.post(`${environment.baseUrl}/admin/add_categories`, body,
    {
      headers: {
        'Content-type': 'multipart/form-data; charset=utf-8;'
        }
    });
  }
  update(body) {
    return this.http.post(`${environment.baseUrl}/admin/edit_categories`, body,
    {
      // headers: {
      //   'Content-type': 'multipart/form-data; charset=utf-8;'
      //   }
    });
  }
  delete(body) {
    return this.http.post(`${environment.baseUrl}/admin/delete_categories`, body, {
      headers: {
        'Content-Type': 'application/json'
        }
    });
  }
}
