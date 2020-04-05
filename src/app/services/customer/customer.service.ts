import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get(`${environment.baseUrl}/admin/users`);
  }
  getUsersOrders(id) {
    return this.http.get(`${environment.baseUrl}/admin/users_orders?id=${id}`);
  }
  getOrderDetails(id) {
    return this.http.get(`${environment.baseUrl}/admin/order_details?id=${id}`);
  }
  blockUser(payload) {
    return this.http.post(`${environment.baseUrl}/admin/block_user`, payload);
  }
  unblockUser(payload) {
    return this.http.post(`${environment.baseUrl}/admin/unblock_user`, payload);
  }
}
