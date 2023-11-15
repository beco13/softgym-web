import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/entities/customer';
import { CustomersService } from 'src/app/services/customers.service';
import { UtilsService } from 'src/app/services/utils.service';


declare const swal: any;

@Component({
  selector: 'app-customers-form',
  templateUrl: './customers-form.component.html',
  styleUrls: ['./customers-form.component.scss']
})
export class CustomersFormComponent implements OnInit {

    formData: Customer;

    constructor(
        private utilsService: UtilsService,
        private router: Router,
        private currentRoute: ActivatedRoute,
        private customersService: CustomersService,) {
        this.formData = new Customer();
    }

    ngOnInit(): void {
        this.currentRoute.params
            .subscribe(params => {
                if (typeof params['id'] !== 'undefined') {
                    this.loadData(params['id']);
                }
            });
        
    }

    private loadData(_id: string) {
        this.utilsService.showLoading();
        this.customersService
            .get(_id)
            .subscribe({
                next: (row: Customer) => {
                    this.formData = row;
                    this.utilsService.hiddenLoading();
                }, error: (error : any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                }
            });
    }



    save(): void {
        this.utilsService.showLoading();
        this.customersService
            .save(this.formData)
            .subscribe({
                next: () => {
                    this.router.navigateByUrl('/admin/customers');
                    this.utilsService.hiddenLoading();
                }, error: (error : any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                }
            });
    }
}
