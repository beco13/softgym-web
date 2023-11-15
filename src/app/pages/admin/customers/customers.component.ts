import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/entities/customer';
import { User } from 'src/app/entities/user';
import { AuthService } from 'src/app/services/auth.service';
import { CustomersService } from 'src/app/services/customers.service';
import { UtilsService } from 'src/app/services/utils.service';

declare const swal: any;
@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {


    rows: Array<Customer>;
    currentUser: User;


    constructor(
        private authService: AuthService,
        private utilsService: UtilsService,
        private customersService: CustomersService) {
        this.rows = [];
    }

    ngOnInit(): void {
        this.currentUser = this.authService.user;
        this.loadData();
    }

    private loadData() {
        this.utilsService.showLoading();
        this.customersService
            .getAll()
            .subscribe({
                next: (rows: Array<Customer>) => {
                    this.rows = rows;
                    this.utilsService.hiddenLoading();
                }, error: (error : any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                }
            });
    }

}
