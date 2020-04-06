import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrdersService } from 'app/services/orders/orders.service';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { CustomerService } from 'app/services/customer/customer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
  providers: [CustomerService]
})
export class CustomerDetailsComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  persons = [];
  dtTrigger = new Subject();
  orderDetails;
  id;

  constructor(
    private router: Router,
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
    this.getUserDetails();
  }
  getUserDetails() {
    this.spinner.show()
    this.customerApi.getOrderDetails(this.id).subscribe((res: any) => {
      console.log(res);
      this.spinner.hide();
      this.orderDetails = res;
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
