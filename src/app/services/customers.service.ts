import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Customer } from '../entities/customer';

@Injectable({
    providedIn: 'root'
})
export class CustomersService {


    constructor(private http: HttpClient) {

    }

    getAll(): Observable<Array<Customer>> {
        return this.http.get<Array<Customer>>(environment.api.app + '/customers');
    }

    get(id: string): Observable<Customer> {
        return this.http.get<Customer>(environment.api.app + '/customers/' + id);
    }

    save(formData: Customer) {
        if (formData._id == null) {
            return this.add(formData);
        }
        return this.edit(formData);
    }

    add(formData: Customer) {
        return this.http.post(environment.api.app + '/customers', formData);
    }

    edit(formData: Customer) {
        return this.http.put(environment.api.app + '/customers/' + formData._id, formData);
    }

}
