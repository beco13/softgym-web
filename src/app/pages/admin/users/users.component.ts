import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/entities/user';
import { UsersService } from 'src/app/services/users.service';
import { UtilsService } from 'src/app/services/utils.service';

declare const swal: any;
@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    rows: Array<User>;

    constructor(
        private utilsService: UtilsService,
        private usersService: UsersService) {
        this.rows = [];
    }

    ngOnInit(): void {
        this.loadData();
    }

    private loadData() {
        this.utilsService.showLoading();
        this.usersService
            .getAll()
            .subscribe({
                next: (rows: Array<User>) => {
                    this.rows = rows;
                    this.utilsService.hiddenLoading();
                }, error: (error : any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                }
            })
    }
    

    remove(userKey: number): void {
        this.utilsService.showLoading();
        this.usersService
            .remove(this.rows[userKey]._id)
            .subscribe({
                next: (response) => {
                    this.rows.splice(userKey, 1);
                    this.utilsService.hiddenLoading();
                }, error: (error : any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                }
            })
    }

    toogleStatus(_id: string): void {
        this.utilsService.showLoading();
        this.usersService
            .toggleStatus(_id)
            .subscribe({
                next: (response) => {
                    this.utilsService.hiddenLoading();
                    this.loadData();
                }, error: (error : any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                }
            });
    }

}
