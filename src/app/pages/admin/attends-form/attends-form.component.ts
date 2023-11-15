import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Attend } from 'src/app/entities/attend';
import { Customer } from 'src/app/entities/customer';
import { AttendsService } from 'src/app/services/attends.service';
import { CustomersService } from 'src/app/services/customers.service';
import { UtilsService } from 'src/app/services/utils.service';




declare const swal: any;


@Component({
    selector: 'app-attends-form',
    templateUrl: './attends-form.component.html',
    styleUrls: ['./attends-form.component.scss']
})
export class AttendsFormComponent implements OnInit {

    formData: Attend;
    customers: Array<Customer>;

    constructor(
        private utilsService: UtilsService,
        private router: Router,
        private currentRoute: ActivatedRoute,
        private attendsService: AttendsService,
        private customersService: CustomersService) {
        this.formData = new Attend();
    }

    ngOnInit(): void {
        
        this.loadCustomers()

        this.currentRoute.params
            .subscribe(params => {
                if (typeof params['id'] !== 'undefined') {
                    this.loadData(params['id']);
                }
            });
    }

    private loadData(_id: string) {
        this.utilsService.showLoading();
        this.attendsService
            .get(_id)
            .subscribe({
                next: (row: Attend) => {
                    this.formData = row;
                    this.utilsService.hiddenLoading();
                }, error: (error: any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                }
            });
    }

    private loadCustomers(){
        this.utilsService.showLoading();
        this.customersService
            .getAll()
            .subscribe({
                next: (rows: Array<Customer>) => {
                    this.customers = rows;
                    this.utilsService.hiddenLoading();
                }, error: (error : any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                }
            });
    }

    save(): void {
        this.utilsService.showLoading();
        this.attendsService
            .checkIn(this.formData)
            .subscribe({
                next: () => {
                    this.router.navigateByUrl('/admin/attends');
                    this.utilsService.hiddenLoading();
                }, error: (error: any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                }
            });
    }

}
