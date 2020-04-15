import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MainCategoryService } from 'app/services/main-category/main-category.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { SharedServiceService } from 'app/services/sharedService/shared-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-main-category',
  templateUrl: './add-main-category.component.html',
  styleUrls: ['./add-main-category.component.scss'],
  providers: [SharedServiceService, MainCategoryService]
})
export class AddMainCategoryComponent implements OnInit, OnDestroy {
  CategoryId;
  CategoryData;
  name;
  arabic_name;
  constructor(
    private categoryService: MainCategoryService,
    private toastr: ToastrService,
    private sharedService: SharedServiceService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute) {
    }

  ngOnInit() {
    this.CategoryData = this.sharedService.fetchData();
    if (this.CategoryData) {
      this.CategoryId = this.CategoryData.id;
      this.name = this.CategoryData.name;
      this.arabic_name = this.CategoryData.arabic_name;
    }
  }
  ngOnDestroy(): void {
    this.sharedService.sendData(null);
  }
  onSubmit() {
    this.spinner.show();
    if (this.CategoryData) {
      const data = {
        id: this.CategoryId,
        name: this.name,
        arabic_name: this.arabic_name
      }
      console.log(data);
      this.categoryService.update(data).subscribe(res => {
        console.log('category add', res);
        this.spinner.hide();
        this.toastr.success('Category has been updated successfully', 'Category Updated');
      }, err => {
        console.log(err);
        this.spinner.hide();
        if (err.status === 200) {
          this.toastr.success('Category has been updated successfully', 'Category Updated');
        } else {
          this.toastr.error('Something went wrong', 'Failure', {
            timeOut: 3000
          });
        }
      })
    } else {
      console.log('create called')
      const data = {
        name: this.name,
        arabic_name: this.arabic_name
      }
      this.categoryService.create(data).subscribe(res => {
        console.log('category add', res)
        this.spinner.hide();
        this.toastr.success('Category has been added successfully', 'Category Added');
      }, err => {
        console.log(err);
        this.spinner.hide();
        if (err.status === 200) {
          this.toastr.success('Category has been added successfully', 'Category Added');
        } else {
          this.toastr.error('Something went wrong', 'Failure', {
            timeOut: 3000
          });
        }
      })
    }
  }

}
