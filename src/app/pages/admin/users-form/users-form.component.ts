import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/entities/user';
import { UsersService } from 'src/app/services/users.service';
import { UtilsService } from 'src/app/services/utils.service';

declare const swal: any;
@Component({
    selector: 'app-users-form',
    templateUrl: './users-form.component.html',
    styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {


    formData: User;

    constructor(
        private utilsService: UtilsService,
        private router: Router,
        private currentRoute: ActivatedRoute,
        private UserService: UsersService,) {
        this.formData = new User();
    }

    ngOnInit(): void {
        this.currentRoute.params
            .subscribe(params => {
                if (typeof params['id'] !== 'undefined') {
                    this.loadData(params['id']);
                }
            });
        
    }

    private loadData(_id: string) {
        this.utilsService.showLoading();
        this.UserService
            .get(_id)
            .subscribe({
                next: (row: User) => {
                    this.formData = row;
                    this.formData.password = null;
                    this.utilsService.hiddenLoading();
                }, error: (error : any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                }
            });
    }



    save(): void {
        this.utilsService.showLoading();
        this.UserService
            .save(this.formData)
            .subscribe({
                next: () => {
                    this.router.navigateByUrl('/admin/users');
                    this.utilsService.hiddenLoading();
                }, error: (error : any) => {
                    swal("Error!", error.error.message, "error");
                    this.utilsService.hiddenLoading();
                }
            });
    }
}
