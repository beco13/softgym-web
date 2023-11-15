import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Membership } from 'src/app/entities/membership';
import { MembershipsService } from 'src/app/services/memberships.service';
import { UtilsService } from 'src/app/services/utils.service';


declare const swal: any;
declare const jQuery: any;


@Component({
  selector: 'app-mensualidades',
  templateUrl: './mensualidades.component.html',
  styleUrls: ['./mensualidades.component.scss']
})
export class MensualidadesComponent implements OnInit {

    rows: Array<Membership>;

    @Input('customer-id')
    customer_id: string;

    constructor(
        private utilsService: UtilsService,
        private membershipsService: MembershipsService
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
        this.membershipsService
            .getAllByCustomer(this.customer_id)
            .subscribe({
                next: (rows: Array<Membership>) => {
                    this.rows = rows;
                    this.utilsService.hiddenLoading();
                }, error: (error: any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                }
            });
    }

}
