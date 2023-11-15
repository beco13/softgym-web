import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectFund } from 'src/app/entities/collect-fund';
import { Customer } from 'src/app/entities/customer';
import { CollectFundsService } from 'src/app/services/collect-funds.service';
import { CustomersService } from 'src/app/services/customers.service';
import { UtilsService } from 'src/app/services/utils.service';


declare const swal: any;


@Component({
  selector: 'app-collect-funds-form',
  templateUrl: './collect-funds-form.component.html',
  styleUrls: ['./collect-funds-form.component.scss']
})
export class CollectFundsFormComponent implements OnInit {

    formData: CollectFund;
    customers: Array<Customer>;

    constructor(
        private router: Router,
        private utilsService: UtilsService,
        private currentRoute: ActivatedRoute,
        private customersService: CustomersService,
        private collectFundsService: CollectFundsService) {
        this.formData = new CollectFund();
        this.customers = [];
    }

    ngOnInit(): void {
        this.currentRoute.params
            .subscribe(params => {
                if (typeof params['id'] !== 'undefined') {
                    this.loadData(params['id']);
                }
            });
        this.loadCustomers();
    }

    private loadData(_id: string) {
        this.utilsService.showLoading();
        this.collectFundsService
            .get(_id)
            .subscribe({
                next: (row: CollectFund) => {
                    this.formData = row;
                    this.utilsService.hiddenLoading();
                }, error: (error: any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                }
            });
    }

    private loadCustomers(){
        this.customersService
        .getAll()
        .subscribe({
            next: (rows: Array<Customer>) => {
                this.customers = rows;
            }, error: (error : any) => {
                swal("Error!", error.error.message, "error");
            }
        });
    }

    listenService(){
        if(this.formData.service == "CLASS"){
            this.formData.created = Date.now();
        }
    }


    save(): void {
        this.utilsService.showLoading();
        this.collectFundsService
            .save(this.formData)
            .subscribe({
                next: () => {
                    this.router.navigateByUrl('/admin/collect-funds');
                    this.utilsService.hiddenLoading();
                }, error: (error: any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                }
            });
    }


}
