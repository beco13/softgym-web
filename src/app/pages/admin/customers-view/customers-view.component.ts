import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/entities/customer';
import { User } from 'src/app/entities/user';
import { AuthService } from 'src/app/services/auth.service';
import { CustomersService } from 'src/app/services/customers.service';
import { UtilsService } from 'src/app/services/utils.service';

declare const swal: any;
@Component({
    selector: 'app-customers-view',
    templateUrl: './customers-view.component.html',
    styleUrls: ['./customers-view.component.scss']
})
export class CustomersViewComponent implements OnInit {

    customer: Customer;

    constructor(
        private utilsService: UtilsService,
        private router: Router,
        private customersService: CustomersService,
        private currentRoute: ActivatedRoute,
    ) {
        this.customer = null;
    }

    ngOnInit(): void {

        this.currentRoute.params
            .subscribe(params => {
                if (typeof params['id'] !== 'undefined') {
                    this.loadData(params['id']);
                } else {
                    swal("Error!", 'No se logro cargar la información', "error");
                }
            });
    }

    loadData(id: string): void {
        this.utilsService.showLoading();
        this.customersService
            .get(id)
            .subscribe({
                next: (response: Customer) => {
                    this.customer = response;
                    this.utilsService.hiddenLoading();}, 
                error: (error : any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                },
            });
    }

    approve(): void {
        
    }

}
