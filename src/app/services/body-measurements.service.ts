import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BodyMeasurement } from '../entities/body-measurement';

@Injectable({
    providedIn: 'root'
})
export class BodyMeasurementsService {

    constructor(private http: HttpClient) {

    }

    getAllByCustomer(customer_id: string): Observable<Array<BodyMeasurement>> {
        return this.http.get<Array<BodyMeasurement>>(environment.api.app + '/customers/' + customer_id + '/body-measurements');
    }

    add(formData: BodyMeasurement) {
        return this.http.post(environment.api.app + '/customers/' + formData.customer_id + '/body-measurements', formData);
    }

    remove(formData: BodyMeasurement) {
        return this.http.delete(environment.api.app + '/customers/' + formData.customer_id + '/body-measurements/' + formData._id);
    }
}
