import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CollectFundView } from '../entities/collect-fund-view';


interface collectFundGroupView {
    _id: string,
    total_amount: number;
}

@Injectable({
    providedIn: 'root'
})
export class ReportsService {

    constructor(private http: HttpClient) {

    }

    moneyCollectionReportToday(): Observable<collectFundGroupView> {
        return this.http.get<collectFundGroupView>(environment.api.app + '/reports/money-collection-today');
    }

    moneyCollectionReportWeek(): Observable<collectFundGroupView> {
        return this.http.get<collectFundGroupView>(environment.api.app + '/reports/money-collection-week');
    }

    moneyCollectionReportMonth(): Observable<collectFundGroupView> {
        return this.http.get<collectFundGroupView>(environment.api.app + '/reports/money-collection-month');
    }

    customersWhoRenewedTodayReport(): Observable<Array<CollectFundView>> {
        return this.http.get<Array<CollectFundView>>(environment.api.app + '/reports/customers-who-renewed-today');
    }
    
    payingCustomersForTodayReport(): Observable<Array<CollectFundView>> {
        return this.http.get<Array<CollectFundView>>(environment.api.app + '/reports/paying-customers-for-today');
    }
    
    customersWhoseMembershipExpiresThisWeekReport(): Observable<Array<CollectFundView>> {
        return this.http.get<Array<CollectFundView>>(environment.api.app + '/reports/customers-whose-membership-expire-week');
    }



}
