import { Component, OnInit } from '@angular/core';
import { MembershipView } from 'src/app/entities/membership-view';
import { MembershipsService } from 'src/app/services/memberships.service';
import { UtilsService } from 'src/app/services/utils.service';



declare const swal: any;

@Component({
  selector: 'app-memberships',
  templateUrl: './memberships.component.html',
  styleUrls: ['./memberships.component.scss']
})
export class MembershipsComponent implements OnInit {

    rows: Array<MembershipView>;

    constructor(
        private utilsService: UtilsService,
        private membershipsService: MembershipsService) {
        this.rows = [];
    }

    ngOnInit(): void {
        this.loadData();
    }

    private loadData() {
        this.utilsService.showLoading();
        this.membershipsService
            .getAll()
            .subscribe({
                next: (rows: Array<MembershipView>) => {
                    this.rows = rows;
                    this.utilsService.hiddenLoading();
                }, error: (error : any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                }
            });
    }

}
