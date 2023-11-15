import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Routine } from '../entities/routine';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class RoutinesService {


    constructor(private http: HttpClient) {

    }

    getAll(): Observable<Array<Routine>> {
        return this.http.get<Array<Routine>>(environment.api.app + '/routines');
    }

    get(id: string): Observable<Routine> {
        return this.http.get<Routine>(environment.api.app + '/routines/' + id);
    }

    save(formData: Routine) {
        if (formData._id == null) {
            return this.add(formData);
        }
        return this.edit(formData);
    }

    add(formData: Routine) {
        return this.http.post(environment.api.app + '/routines', formData);
    }

    edit(formData: Routine) {
        return this.http.put(environment.api.app + '/routines/' + formData._id, formData);
    }
}
