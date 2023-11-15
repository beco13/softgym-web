import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Attend } from 'src/app/entities/attend';
import { AttendsService } from 'src/app/services/attends.service';
import { UtilsService } from 'src/app/services/utils.service';


declare const swal: any;
declare const jQuery: any;


@Component({
  selector: 'app-asistencias',
  templateUrl: './asistencias.component.html',
  styleUrls: ['./asistencias.component.scss']
})
export class AsistenciasComponent implements OnInit {

    rows: Array<Attend>;

    @Input('customer-id')
    customer_id: string;

    constructor(
        private utilsService: UtilsService,
        private attendsService: AttendsService
        ) {
        this.rows = [];
        this.customer_id = null;
    }

    ngOnInit(): void {

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
        this.attendsService
            .getAllByCustomer(this.customer_id)
            .subscribe({
                next: (rows: Array<Attend>) => {
                    this.rows = rows;
                    this.utilsService.hiddenLoading();
                }, error: (error: any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                }
            });
    }
}
