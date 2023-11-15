import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

declare const jQuery: any;

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    constructor(private http: HttpClient) {

    }

    /**
     * Permite mostrar el panel de cargando
     */
    public showLoading(): void {
        jQuery(".loader-wrapper")
            .fadeIn("slow", function () {
                //jQuery(this).remove();
            });
    }
   
    /**
     * Permite ocultar el panel de cargando
     */
    public hiddenLoading(): void {
        jQuery(".loader-wrapper")
            .fadeOut("slow", function () {
                //jQuery(this).remove();
            });
    }

    

    /**
       * elimina espacios o el caracter (segundo argumento)
       * @param cadena 
       * @param delimiter 
       * @returns 
       */
    public lTrim(cadena: string, character: string = " "): string {

        // validamos que solo venga un caracter para limpiar
        if (character.length == 1) {
            throw new Error("solo se permite un caracter para limpiar el string al inicio");
        }

        // si es espacio aplicamos otro algoritmo
        if (character == " ") {
            return cadena.trimStart();
        }

        // verificamo si el caracter en la primera posicion es el mismo que se esta buscando
        if (cadena.charAt(0) == character) {
            return this.lTrim(cadena.substring(1, cadena.length));
        }

        // como no se encontro nada devolvemos la cadena
        return cadena;
    }


    /**
     * permite convertir un dataURI a un objeto BLOB
     * 
     * @param dataURI 
     * @param mime_type 
     * @returns 
     */
    public dataUrlToBlob(dataURI: string, mime_type: string): Blob {

        // obtenemos la paret encitrada y la desencriptamos
        var byteString = atob(dataURI.split(',')[1]);

        // creamos el buffer
        var arrayBuffer = new ArrayBuffer(byteString.length);

        var bytes = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteString.length; i++) {
            bytes[i] = byteString.charCodeAt(i);
        }

        const tmpBlob = new Blob([bytes], { type: mime_type });

        return tmpBlob;
    }
}
