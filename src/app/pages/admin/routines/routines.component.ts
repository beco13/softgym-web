import { Component, OnInit } from '@angular/core';
import { Routine } from 'src/app/entities/routine';
import { RoutinesService } from 'src/app/services/routines.service';
import { UtilsService } from 'src/app/services/utils.service';

declare const swal: any;

@Component({
    selector: 'app-routines',
    templateUrl: './routines.component.html',
    styleUrls: ['./routines.component.scss']
})
export class RoutinesComponent implements OnInit {


    rows: Array<Routine>;

    constructor(
        private utilsService: UtilsService,
        private routinesService: RoutinesService) {
        this.rows = [];
    }

    ngOnInit(): void {
        this.loadData();
    }

    private loadData() {
        this.utilsService.showLoading();
        this.routinesService
            .getAll()
            .subscribe({
                next: (rows: Array<Routine>) => {
                    this.rows = rows;
                    this.utilsService.hiddenLoading();
                }, error: (error : any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                }
            });
    }

}
