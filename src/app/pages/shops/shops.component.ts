import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShopService } from 'app/services/shop/shop.service';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss'],
  providers: [ShopService]
})
export class ShopsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  shopList;
  constructor(public shopApi: ShopService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 25
    };
    this.getShops();
  }

  getShops() {
    this.spinner.show();
    this.shopApi.getShop().subscribe(res => {
      console.log(res);
      this.spinner.hide();
      this.shopList = res;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    }, err => {
      console.log(err);
      this.spinner.hide();
    })
  }
}
