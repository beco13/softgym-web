import { Component, OnInit } from '@angular/core';
import { CollectFundView } from 'src/app/entities/collect-fund-view';
import { CollectFundsService } from 'src/app/services/collect-funds.service';
import { UtilsService } from 'src/app/services/utils.service';



declare const swal: any;


@Component({
  selector: 'app-collect-funds',
  templateUrl: './collect-funds.component.html',
  styleUrls: ['./collect-funds.component.scss']
})
export class CollectFundsComponent implements OnInit {


    rows: Array<CollectFundView>;

    constructor(
        private utilsService: UtilsService,
        private collectFundsService: CollectFundsService) {
        this.rows = [];
    }

    ngOnInit(): void {
        this.loadData();
    }

    private loadData() {
        this.utilsService.showLoading();
        this.collectFundsService
            .getAll()
            .subscribe({
                next: (rows: Array<CollectFundView>) => {
                    this.rows = rows;
                    this.utilsService.hiddenLoading();
                }, error: (error : any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                }
            });
    }

}
