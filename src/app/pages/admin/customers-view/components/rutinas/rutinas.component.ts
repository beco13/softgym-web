import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { CustomerRoutine } from 'src/app/entities/customer-routine';
import { CustomerRoutineView } from 'src/app/entities/customer-routine-view';
import { Routine } from 'src/app/entities/routine';
import { User } from 'src/app/entities/user';
import { CustomerRoutinesService } from 'src/app/services/customer-routines.service';
import { RoutinesService } from 'src/app/services/routines.service';
import { UsersService } from 'src/app/services/users.service';
import { UtilsService } from 'src/app/services/utils.service';



declare const swal: any;
declare const jQuery: any;


@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.scss']
})
export class RutinasComponent implements OnInit {

    users: Array<User>;
    routines: Array<Routine>;

    rows: Array<CustomerRoutineView>;
    formData: CustomerRoutine;

    @Input('customer-id')
    customer_id: string;

    @ViewChild('modal')
    modal: ElementRef;

    constructor(
        private utilsService: UtilsService,
        private customerRoutinesService: CustomerRoutinesService,
        private usersService: UsersService,
        private routinesService: RoutinesService
        ) {
        this.routines = [];
        this.users = [];
        this.rows = [];
        this.customer_id = null;
        this.formData = null;
    }

    ngOnInit(): void {
        this.loadUsers();
        this.loadRutines();
    }

    // detecta cambios en los INPUTS
    ngOnChanges(changes: SimpleChanges) {
        if (changes['customer_id']) {
            if (changes['customer_id'] != null) {
                this.loadData();
            }
        }
    }

    private loadData() {
        this.utilsService.showLoading();
        this.customerRoutinesService
            .getAllByCustomer(this.customer_id)
            .subscribe({
                next: (rows: Array<CustomerRoutineView>) => {
                    this.rows = rows;
                    this.utilsService.hiddenLoading();
                }, error: (error: any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                }
            });
    }

    private loadUsers(){
        this.usersService
            .getAll()
            .subscribe({
                next: (rows: Array<User>) => {
                    this.users = rows;
                }, error: (error: any) => {
                    swal("Error!", error.error.message, "error");
                }
            });
    }

    private loadRutines(){
        this.routinesService
            .getAll()
            .subscribe({
                next: (rows: Array<Routine>) => {
                    this.routines = rows;
                }, error: (error: any) => {
                    swal("Error!", error.error.message, "error");
                }
            });
    }

    /**
     * Permite eliminar la medida
     * @param row BodyMeasurement
     */
    askToRemove(row: CustomerRoutine): void {
        swal({
            title: "Seguro deseas eliminar el registro?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willResult: boolean) => {
                if (willResult) {
                    this.remove(row);
                }
            });
    }

    remove(row: CustomerRoutine) {
        this.utilsService.showLoading();
        this.customerRoutinesService
            .remove(row)
            .subscribe({
                next: () => {
                    this.utilsService.hiddenLoading();
                    this.loadData();
                }
            });
    }

    openModalForm() {
        this.formData = new CustomerRoutine();
        this.formData.customer_id = this.customer_id;

        console.log("form: ", this.formData)
        jQuery(this.modal.nativeElement).modal('show');
    }

    saveForm() {
        this.utilsService.showLoading();
        this.customerRoutinesService
            .add(this.formData)
            .subscribe({
                next: (response: any) => {
                    jQuery(this.modal.nativeElement).modal('hide');
                    this.utilsService.hiddenLoading();
                    this.loadData();
                }, error: (error: any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                }
            });
    }

    setAsActive(row: CustomerRoutine) {
        this.utilsService.showLoading();
        this.customerRoutinesService
            .activate(row)
            .subscribe({
                next: (response: any) => {
                    this.utilsService.hiddenLoading();
                    this.loadData();
                }, error: (error: any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                }
            });
    }

}
