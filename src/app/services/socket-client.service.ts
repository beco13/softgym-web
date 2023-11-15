import { EventEmitter, Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { SocketError } from '../helpers/SocketError';


@Injectable({
    providedIn: 'root'
})
export class SocketClientService {

    /**
     * Contiene el socket que estara conectado, minetras exista session
     */
    socket: Socket;

    /**
     * atributo para disparar eventos de que se hizo conexion con el servidor socket en el backend
     */
    onConnect: EventEmitter<void>;

    /**
     * atributo para disparar eventos de que se perdio la conexion con el servidor socket en el backend
     */
    onDisconnect: EventEmitter<void>;

    /**
     * atributo para disparar eventos de errores en la conexion con el servidor socket en el backend
     */
    onConnectError: EventEmitter<SocketError>;


    constructor() {
        this.socket = null;
        this.onConnect = new EventEmitter();
        this.onDisconnect = new EventEmitter();
        this.onConnectError = new EventEmitter<SocketError>();
    }

    /**
     * Permite verificar si hay conexion via socket
     * @returns boolean
     */
    isConnected(): boolean {

        // verificamos que haya instancia socket
        if (this.socket == null) {
            return false;
        }

        // cuando haya instancia verificamos que se este conectado
        return this.socket.connected;
    }

    /**
     * Permite inicializar el socket
     * @param token: string;
     */
    connect(token: string): void {

        // verificamos que no estemos conectados para crear una nueva conexion
        if (this.isConnected()) {
            return;
        }

        /**
         * creamos la instancia unica del socket
         * @see https://socket.io/docs/v4/client-initialization/
         */
        this.socket = io(environment.api.socket, {
            path: "/websockets",
            auth: {
                access_token: token
            },
            transports: ['websocket', 'polling'],
        });

        /**
         * esperamos a que se conecte el socket
         * @see https://socket.io/docs/v4/client-socket-instance/#connect
         */
        this.socket.on("connect", () => {
            // avisamos que ya hay conexion via socket
            this.onConnect.emit();
        });

        /**
         * creamos un listener por si se presenta un error cuando se conecte
         * @see https://socket.io/docs/v4/client-socket-instance/#connect_error 
         */
        this.socket.on("connect_error", (err) => {
            console.error("SOCKET CONNECT ERROR: ", err);
            this.onConnectError.emit(err as SocketError);
        });

        /**
         * creamos un listener para saber cuando se desconecte
         * 
         * @see https://socket.io/docs/v4/client-socket-instance/#disconnect
         */
        this.socket.on("disconnect", (_reason: any) => {
            console.log("SOCKET DISCONECT", _reason);
            this.onDisconnect.emit(_reason);
        });


    }

    /**
     * Permite cerrar la sesion del socket
     * @see https://socket.io/docs/v4/client-api/#socketdisconnect
     */
    disconnect() {
        this.socket.disconnect();
    }


}
