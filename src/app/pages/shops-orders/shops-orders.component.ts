import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShopService } from 'app/services/shop/shop.service';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shops-orders',
  templateUrl: './shops-orders.component.html',
  styleUrls: ['./shops-orders.component.scss'],
  providers: [ShopService]
})
export class ShopsOrdersComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  shopOrders;
  id;

  constructor(
    public shopApi: ShopService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private activatedroute: ActivatedRoute) { }

  ngOnInit() {
    if (this.activatedroute.snapshot.params['id']) {
      this.activatedroute.params.subscribe(params => {
        this.id = params['id'];
      });
    }
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25
    }
    this.getShopOrders();
  }

  getShopOrders() {
    this.spinner.show();
    this.shopApi.getShopOrders(this.id).subscribe(res => {
      console.log(res);
      this.spinner.hide();
      this.shopOrders = res;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    }, err => {
      console.log(err);
      this.spinner.hide()
    })
  }

}
