import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { BodyMeasurement } from 'src/app/entities/body-measurement';
import { BodyMeasurementsService } from 'src/app/services/body-measurements.service';
import { UtilsService } from 'src/app/services/utils.service';

declare const swal: any;
declare const jQuery: any;

@Component({
    selector: 'app-medidas',
    templateUrl: './medidas.component.html',
    styleUrls: ['./medidas.component.scss']
})
export class MedidasComponent implements OnInit {

    rows: Array<BodyMeasurement>;
    formData: BodyMeasurement;

    @Input('customer-id')
    customer_id: string;

    @ViewChild('modal')
    modal: ElementRef;

    constructor(
        private utilsService: UtilsService,
        private bodyMeasurementsService: BodyMeasurementsService) {
        this.rows = [];
        this.customer_id = null;
        this.formData = null;
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
        this.bodyMeasurementsService
            .getAllByCustomer(this.customer_id)
            .subscribe({
                next: (rows: Array<BodyMeasurement>) => {
                    this.rows = rows;
                    this.utilsService.hiddenLoading();
                }, error: (error: any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                }
            });
    }

    /**
     * Permite eliminar la medida
     * @param row BodyMeasurement
     */
    askToRemove(row: BodyMeasurement): void {
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

    remove(row: BodyMeasurement) {
        this.utilsService.showLoading();
        this.bodyMeasurementsService
            .remove(row)
            .subscribe({
                next: () => {
                    this.utilsService.hiddenLoading();
                    this.loadData();
                }
            });
    }

    openModalForm() {
        this.formData = new BodyMeasurement();
        this.formData.customer_id = this.customer_id;
        jQuery(this.modal.nativeElement).modal('show');
    }

    saveForm() {
        this.utilsService.showLoading();
        this.bodyMeasurementsService
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
}
