import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SocketClientService } from 'src/app/services/socket-client.service';

declare const swal: any;

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(
        private router: Router,
        public authService: AuthService,
        private socketClientService: SocketClientService) {

    }

    /**
     * Se ejecuta despues de instanciarse el componente
     */
    ngOnInit(): void {

       
    }


    /**
     * Permite cerrar la sesion 
     * @param event 
     */
    async logOut(event: Event): Promise<void> {
        event.stopPropagation();
        event.preventDefault();
        await this.authService.logOut();
    }

}
