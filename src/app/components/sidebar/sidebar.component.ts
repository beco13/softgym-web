import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UtilsService } from 'src/app/services/utils.service';

declare const SimpleBar: any;
declare const jQuery: any;
declare const onReadySideBar: CallableFunction;

declare const swal: any;
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    role: "ADMIN" | "COACH";

    constructor(
        private route: Router,
        private authService: AuthService,
        private utilsService: UtilsService
    ) {
        this.role = null;
    }

    ngOnInit(): void {
        this.role = this.authService.user.role;
    }

    ngAfterViewInit() {

        var myElement = document.getElementById('simple-bar');
        new SimpleBar(myElement, { autoHide: true });

        setTimeout(() => {
            onReadySideBar();
        }, 500);
    }

}
