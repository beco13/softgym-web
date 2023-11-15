import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MembershipView } from '../entities/membership-view';

@Injectable({
  providedIn: 'root'
})
export class MembershipsService {


    constructor(private http: HttpClient) {

    }

    getAll(): Observable<Array<MembershipView>> {
        return this.http.get<Array<MembershipView>>(environment.api.app + '/memberships');
    }

    getAllByCustomer(customer_id: string): Observable<Array<MembershipView>> {
        return this.http.get<Array<MembershipView>>(environment.api.app + '/customers/' + customer_id + '/memberships');
    }

    get(id: string): Observable<MembershipView> {
        return this.http.get<MembershipView>(environment.api.app + '/memberships/' + id);
    }
}
