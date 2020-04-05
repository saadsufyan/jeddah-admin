import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShopService } from 'app/services/shop/shop.service';
import { Subject } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-shops-details',
  templateUrl: './shops-details.component.html',
  styleUrls: ['./shops-details.component.scss'],
  providers: [ShopService]
})
export class ShopsDetailsComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  shopDetails;
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
    this.getShopDetails();
  }

  getShopDetails() {
    this.spinner.show();
    this.shopApi.getShopDetails(this.id).subscribe(res => {
      console.log(res);
      this.spinner.hide();
      this.shopDetails = res;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    }, err => {
      console.log(err);
      this.spinner.hide()
    })
  }
  blockShop() {
    const data = {
      id: this.id
    }
    this.spinner.show()
    this.shopApi.blockShop(data).subscribe(res => {
      console.log(res);
      this.spinner.hide();
      this.toastr.success(
        `You have successfully block this shop.`,
        'Shop blocked'
      );
    }, err => {
      this.spinner.hide();
      console.log(err);
      if (err.status === 200) {
        this.toastr.success(
          `You have successfully block this shop.`,
          'Shop blocked'
        );
      } else {
        this.toastr.error(`Some error occured`, `Can't block shop.`);
      }
    })
  }
  unblockShop() {
    const data = {
      id: this.id
    }
    this.spinner.show()
    this.shopApi.unblockShop(data).subscribe(res => {
      console.log(res);
      this.spinner.hide();
      this.toastr.success(
        `You have successfully unblock this shop.`,
        'Shop unblocked'
      );
    }, err => {
      this.spinner.hide();
      console.log(err);
      if (err.status === 200) {
        this.toastr.success(
          `You have successfully unblock this shop.`,
          'Shop unblocked'
        );
      } else {
        this.toastr.error(`Some error occured`, `Can't unblock shop.`);
      }
    })
  }
}
