import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from 'app/services/orders/orders.service';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomerService } from 'app/services/customer/customer.service';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.scss'],
  providers: [CustomerService]
})

export class CustomerOrdersComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  persons = [];
  dtTrigger = new Subject();
  orderList;
  id;

  constructor(public customerApi: CustomerService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25
    };
    this.getUserOrders();
  }
  getUserOrders() {
    this.spinner.show()
    this.customerApi.getUsersOrders(this.id).subscribe((res: any) => {
      console.log(res);
      this.spinner.hide();
      this.orderList = res;
      this.dtTrigger.next();
    }, err => {
      console.log(err);
      this.spinner.hide();
    })
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
