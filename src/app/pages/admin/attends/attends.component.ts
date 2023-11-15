import { Component, OnInit } from '@angular/core';
import { AttendView } from 'src/app/entities/attend-view';
import { AttendsService } from 'src/app/services/attends.service';
import { UtilsService } from 'src/app/services/utils.service';


declare const swal: any;

@Component({
    selector: 'app-attends',
    templateUrl: './attends.component.html',
    styleUrls: ['./attends.component.scss']
})
export class AttendsComponent implements OnInit {

    rows: Array<AttendView>;

    constructor(
        private utilsService: UtilsService,
        private attendsService: AttendsService) {
        this.rows = [];
    }

    ngOnInit(): void {
        this.loadData();
    }

    private loadData() {
        this.utilsService.showLoading();
        this.attendsService
            .getAll()
            .subscribe({
                next: (rows: Array<AttendView>) => {
                    this.rows = rows;
                    this.utilsService.hiddenLoading();
                }, error: (error: any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                }
            });
    }

    /**
     * Permite registrar la salida
     * @param attend 
     */
    checkout(attend: AttendView): void {
        swal({
            title: "Seguro deseas registrar la salida?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willResult: boolean) => {
                if (willResult) {

                    this.attendsService
                        .checkOut(attend)
                        .subscribe({
                            next: () => {
                                this.loadData();
                            }
                        });
                }
            })


    }

}


