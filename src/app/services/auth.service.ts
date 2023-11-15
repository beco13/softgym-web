import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SocketError } from 'src/app/helpers/SocketError';
import { environment } from 'src/environments/environment';
import { Customer } from '../entities/customer';
import { SocketClientService } from './socket-client.service';
import { User } from '../entities/user';

/**
 * Interfaz para representar la estrucutra de datos que viene en el inicio de sesion
 */
interface loginResponse {
    token: string,
    user: User
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    token: string;
    user: User;

    constructor(
        private http: HttpClient,
        private socketClientService: SocketClientService,
        private router: Router
    ) {

        this.token = null;
        this.user = null;

        // cargamos informacion si la hay guardada
        this.load();
    }

    /**
     * Permite guardar la informacion de la session en el localstorage
     */
    private save() {
        // validamos que los datos de sesion basicos esten ingresados para poder guardarlos
        if (this.token !== null) {
            localStorage.setItem("token", this.token);

            if (this.user !== null) {
                localStorage.setItem("user", JSON.stringify(this.user));
            }

        }
    }

    /**
     * permite cargar informacion del localstorage a la session
     */
    private load() {

        // se cargan los datos de la session
        const tmpToken = localStorage.getItem('token');

        if (tmpToken !== null) {

            this.token = tmpToken;

            const tmpUser = localStorage.getItem('user');
            if (tmpUser !== null) {
                this.user = JSON.parse(tmpUser);
            }

            // conectamos con el backend a traves de sockets
            setTimeout(() => { this.initWebSocket() }, 1000);

        }
    }

    /**
     * Permite dar la orden para que se inicialize el socket con el backend
     */
    private initWebSocket(): void {

        // iniciamos la conexion con el servidor backend a traves de socket
        this.socketClientService.connect(this.token);

        // estamos pendientes por si se genera un error en la conexion del socket             
        this.socketClientService
            .onConnectError
            .subscribe({
                next: (error: SocketError) => {

                    // verificamos si el error de conexion es por que se cerro la session
                    if (error.data !== null && error.data !== undefined) {
                        if (error.data.action == 'log_out') {
                            this.removeSession();
                        }
                    }
                }
            })
    }

    /**
     * Permite remover toda la informacion de la session y posteriormente si es el caso, redireccoinar al formulario del login
     * 
     * @param redirectToLogin 
     */
    removeSession(redirectToLogin: boolean = true): void {

        // eliminamos la informacion de la sesion
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        // destruimos las variables tratadas en esta clase AUTH
        this.token = null;
        this.user = null;
        
        // si esta conectado via socket
        if(this.socketClientService.isConnected()){

            // desconectamos el socket
            this.socketClientService.disconnect();
        }

        // verificamos si solicitan redireccionar
        if (redirectToLogin) {
            // redireccionamos al login
            this.router.navigateByUrl('/login');
        }
    }

    /**
     * Permite iniciar sesion a la cuenta
     * 
     * @param credential 
     * @returns void
     */
    logIn(credential: User): Promise<void> {
        return new Promise((resolve, reject) => {
            this.http
                .post<loginResponse>(environment.api.base + '/login', credential)
                .subscribe({
                    next: (value) => {

                        // asignamos la informacion basica de la sessoin
                        this.token = value.token;
                        this.user = value.user;

                        // guardamos la informacion
                        this.save();

                        // conectamos con el backend a traves de sockets
                        this.initWebSocket();

                        // indicamos que se hizo la conexion
                        resolve();
                    },
                    error: (value) => {
                        reject(value);
                    },
                });
        });
    }

    /**
     * permite cerrar session a la cuenta logueada
     * 
     * @returns void
     */
    logOut(): Promise<void> {
        return new Promise((resolve, reject) => {
            this.http
                .post(environment.api.base + '/logout', {})
                .subscribe({
                    next: () => {
                        this.removeSession();
                        resolve();
                    },
                    error: (value) => {
                        reject();
                    },
                });
        });
    }
}
