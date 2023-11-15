import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerRoutine } from '../entities/customer-routine';
import { CustomerRoutineView } from '../entities/customer-routine-view';

@Injectable({
  providedIn: 'root'
})
export class CustomerRoutinesService {

    constructor(private http: HttpClient) {

    }

    getAllByCustomer(customer_id: string): Observable<Array<CustomerRoutineView>> {
        return this.http.get<Array<CustomerRoutineView>>(environment.api.app + '/customers/' + customer_id + '/routines');
    }

    add(formData: CustomerRoutine) {
        return this.http.post(environment.api.app + '/customers/' + formData.customer_id + '/routines', formData);
    }

    activate(formData: CustomerRoutine) {
        return this.http.post(environment.api.app + '/customers/' + formData.customer_id + '/routines/' + formData._id + '/activate', formData);
    }

    remove(formData: CustomerRoutine) {
        return this.http.delete(environment.api.app + '/customers/' + formData.customer_id + '/routines/' + formData._id);
    }
}
