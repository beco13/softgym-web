import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectFund } from '../entities/collect-fund';
import { environment } from 'src/environments/environment';
import { CollectFundView } from '../entities/collect-fund-view';

@Injectable({
    providedIn: 'root'
})
export class CollectFundsService {

    constructor(private http: HttpClient) {

    }

    getAll(): Observable<Array<CollectFundView>> {
        return this.http.get<Array<CollectFundView>>(environment.api.app + '/collect-funds');
    }

    get(id: string): Observable<CollectFund> {
        return this.http.get<CollectFund>(environment.api.app + '/collect-funds/' + id);
    }

    save(formData: CollectFund) {
        if (formData._id == null) {
            return this.add(formData);
        }
        return this.edit(formData);
    }

    add(formData: CollectFund) {
        return this.http.post(environment.api.app + '/collect-funds', formData);
    }

    edit(formData: CollectFund) {
        return this.http.put(environment.api.app + '/collect-funds/' + formData._id, formData);
    }
}
