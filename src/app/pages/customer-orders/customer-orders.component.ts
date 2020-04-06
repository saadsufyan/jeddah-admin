import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomerService } from 'app/services/customer/customer.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    public customerApi: CustomerService,
    private activatedroute: ActivatedRoute,
    private spinner: NgxSpinnerService) { }
  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25
    };
    if (this.activatedroute.snapshot.params['id']) {
      this.activatedroute.params.subscribe(params => {
        this.id = params['id'];
      });
    }
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
