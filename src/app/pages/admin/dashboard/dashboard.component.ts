import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectFundView } from 'src/app/entities/collect-fund-view';
import { User } from 'src/app/entities/user';
import { AuthService } from 'src/app/services/auth.service';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    moneyCollectionToday: number;
    moneyCollectionWeek: number;
    moneyCollectionMonth: number;

    customersWhoRenewedToday: Array<CollectFundView>;
    payingCustomersForToday: Array<CollectFundView>;
    customersWhoseMembershipExpiresThisWeek: Array<CollectFundView>;

    currentUser: User;

    constructor(
        private authService: AuthService,
        private reportsService: ReportsService) {

        this.moneyCollectionToday = 0;
        this.moneyCollectionWeek = 0;
        this.moneyCollectionMonth = 0;

        this.customersWhoRenewedToday = [];
        this.payingCustomersForToday = [];
        this.customersWhoseMembershipExpiresThisWeek = [];

        this.currentUser = null;
    }

    ngOnInit(): void {
        this.currentUser = this.authService.user;

        if(this.currentUser.role == "ADMIN"){
            this.loadReports();
        }
    }

    loadReports() {

        this.reportsService
            .moneyCollectionReportToday()
            .subscribe({
                next: (response) => {
                    if (response != null) {
                        this.moneyCollectionToday = response.total_amount;
                    }
                }
            });


        this.reportsService
            .moneyCollectionReportWeek()
            .subscribe({
                next: (response) => {
                    if (response != null) {
                        this.moneyCollectionWeek = response.total_amount;
                    }
                }
            });


        this.reportsService
            .moneyCollectionReportMonth()
            .subscribe({
                next: (response) => {
                    if (response != null) {
                        this.moneyCollectionMonth = response.total_amount;
                    }
                }
            });


        this.reportsService
            .customersWhoRenewedTodayReport()
            .subscribe({
                next: (response) => {
                    this.customersWhoRenewedToday = response;
                }
            });


        this.reportsService
            .payingCustomersForTodayReport()
            .subscribe({
                next: (response) => {
                    this.payingCustomersForToday = response;
                }
            });

        this.reportsService
            .customersWhoseMembershipExpiresThisWeekReport()
            .subscribe({
                next: (response) => {
                    this.customersWhoseMembershipExpiresThisWeek = response;
                }
            });
    }

}
