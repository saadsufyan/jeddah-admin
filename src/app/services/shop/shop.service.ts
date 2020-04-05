import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(private http: HttpClient) {}

  getShop() {
    return this.http.get(`${environment.baseUrl}/admin/shops`);
  }
  getShopDetails(id) {
    return this.http.get(`${environment.baseUrl}/admin/shops_products?id=${id}`);
  }
  getShopOrders(id) {
    return this.http.get(`${environment.baseUrl}/admin/shops_orders?id=${id}`);
  }
  blockShop(payload) {
    return this.http.post(`${environment.baseUrl}/admin/block_shop`, payload);
  }
  unblockShop(payload) {
    return this.http.post(`${environment.baseUrl}/admin/unblock_shop`, payload);
  }
}
