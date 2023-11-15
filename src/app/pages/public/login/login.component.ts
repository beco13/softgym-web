import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UtilsService } from 'src/app/services/utils.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/entities/user';

declare const swal: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    formData: User;

    constructor(
        private utilsService: UtilsService,
        private authService: AuthService, 
        private router: Router) {
        this.formData = new User();
    }

    ngOnInit(): void {
        // validamos que ya el usuario haya iniciado session
        if (this.authService.user !== null) {
            this.router.navigateByUrl('/admin/dashboard');
        }
    }

    onLogin(form: NgForm) {

        // si el formulario no esta validado, paramos accion
        if (form.form.status !== 'VALID') {
            return;
        }

        this.utilsService.showLoading();
        this.authService
            .logIn(this.formData)
            .then(() => {
                this.router.navigateByUrl('/admin/dashboard');
                this.utilsService.hiddenLoading();
            })
            .catch((httpError) => {
                try {
                    swal("Error!", httpError.error.message, "error");
                } catch (error) {
                    console.info("error: ", httpError);
                }
                this.utilsService.hiddenLoading();
            });
    }

}
