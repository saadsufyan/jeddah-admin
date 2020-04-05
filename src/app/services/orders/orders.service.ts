import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  token: string;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }

  getAllOrders() {
    return this.http.get(`${environment.baseUrl}/admin/all_order_status`, {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': this.token
        }
    });
  }
  gerOrdersByDate(startDate, endDate) {
    return this.http.get(`${environment.baseUrl}/admin/searchAllAppointments?from=${startDate}&to=${endDate}`, {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': this.token
        }
    });
  }
}
