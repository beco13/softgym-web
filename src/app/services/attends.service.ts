import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attend } from '../entities/attend';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { AttendView } from '../entities/attend-view';

@Injectable({
  providedIn: 'root'
})
export class AttendsService {

    constructor(private http: HttpClient) {

    }

    getAll(): Observable<Array<AttendView>> {
        return this.http.get<Array<AttendView>>(environment.api.app + '/attends');
    }

    getAllByCustomer(customer_id: string): Observable<Array<Attend>> {
        return this.http.get<Array<Attend>>(environment.api.app + '/customers/' + customer_id + '/attends');
    }

    get(id: string): Observable<Attend> {
        return this.http.get<Attend>(environment.api.app + '/attends/' + id);
    }

    checkIn(formData: Attend) {
        return this.http.post(environment.api.app + '/attends', formData);
    }

    checkOut(formData: Attend) {
        return this.http.put(environment.api.app + '/attends/' + formData._id, formData);
    }

}
