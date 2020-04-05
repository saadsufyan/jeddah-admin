import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CustomerService } from 'app/services/customer/customer.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SharedServiceService } from 'app/services/sharedService/shared-service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss'],
  providers: [CustomerService, SharedServiceService]
})
export class CustomerListComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  items: any;
  dtTrigger = new Subject();
  constructor(
    private http: HttpClient,
    private router: Router,
    public customerApi: CustomerService,
    public sharedService: SharedServiceService,
    private spinner: NgxSpinnerService) { }


  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25
    }
    this.getCustomerList();
  }
  getCustomerList() {
    this.spinner.show();
    this.customerApi.getAllUsers().subscribe(res => {
      console.log(res);
      this.spinner.hide();
      this.items = res;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    }, err => {
      console.log(err);
    })
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

}
