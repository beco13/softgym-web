import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../entities/user';


@Injectable({
    providedIn: 'root'
})
export class UsersService {


    constructor(private http: HttpClient) {

    }

    getAll(): Observable<Array<User>> {
        return this.http.get<Array<User>>(environment.api.app + '/users');
    }

    get(id: string): Observable<User> {
        return this.http.get<User>(environment.api.app + '/users/' + id);
    }

    save(formData: User) {
        if (formData._id == null) {
            return this.add(formData);
        }
        return this.edit(formData);
    }

    add(formData: User) {
        return this.http.post(environment.api.app + '/users', formData);
    }

    edit(formData: User) {
        return this.http.put(environment.api.app + '/users/' + formData._id, formData);
    }
    
    remove(id: string): Observable<any> {
        return this.http.delete(environment.api.app + '/users/' + id);
    }

    toggleStatus(id: string): Observable<any> {
        return this.http.put(environment.api.app + '/users/' + id + '/status',{});
    }

}
