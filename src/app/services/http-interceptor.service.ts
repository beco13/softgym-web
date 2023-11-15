import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

declare const jQuery: any;

@Injectable({
    providedIn: 'root'
})
export class HttpInterceptorService {

    constructor(
        public authService: AuthService
    ) {

    }

    /**
     * Permite verificar si se esta haciendo una peticion a la api del proyecto
     * @param urlRequest
     */
    private isRequestToApi(urlRequest: string): boolean {

        const apiUrl = new URL(environment.api.base);
        const urlReq = new URL(urlRequest);

        // verificamos si el host es el mismo del host de la api
        if (apiUrl.hostname === urlReq.hostname) {

            // verificamos si se esta haciendo uso de la api como tal
            if (urlRequest.includes(apiUrl.href)) {

                return true;
            }
        }
        return false;
    }

    /**
     * Permite organizar el request que va dirigido a la api para adicionarle el access token
     * @param req 
     */
    private cloneRequestToApi(req: HttpRequest<any>): HttpRequest<any> {

        // creamos la base del objeto para clonar
        const newReq = {
            url: req.url,
            setHeaders: {
                'Content-Type': 'application/json',
            },
            setParams: {
                'access_token': this.authService.token
            }
        };

        // en caso de que no haya sesion, no enviamos el token
        if (this.authService.token === null) {
            delete newReq.setParams.access_token;
        }

        // clonamos el request y le adicionamos el access token
        return req.clone(newReq);
    }


    /**
     * Metodo principal que se ejecuta por cada llamado de un http Client
     * @param req 
     * @param next 
     */
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // en caso de que no sea una peticion al servidor api dejamos la solicitud tal cual
        if (!this.isRequestToApi(req.url)) {
            return next.handle(req);
        }

        // como la peticion es para el servidor api, se hace un clon de la solicitud
        // y se le adiciona el access token para las credenciales
        return next
            .handle(this.cloneRequestToApi(req))
            .pipe(
                tap(
                    event => {
                        // logging the http response to browser's console in case of a success
                        if (event instanceof HttpResponse) {
                            // console.log('api call success : ', event);
                        }
                    },
                    error => {
                        // logging the http response to browser's console in case of a failuer
                        if (event instanceof HttpResponse) {
                            // console.log('api call error : ', event);
                        } else {

                            console.log("error http: ", error);

                            // The backend returned an unsuccessful response code.
                            // The response body may contain clues as to what went wrong,
                            console.error(`Backend returned code ${error.status}, ` + `body was:`, error);

                            // si devuelve 401, es por que no hay session o el access token no es valida, o se vencio la sesion
                            if (error.status === 401) {
                                this.authService.removeSession();
                            }
                        }
                    }
                )
            );
    }
}
