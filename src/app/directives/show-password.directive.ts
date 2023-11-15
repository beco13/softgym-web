import { Directive, ElementRef } from '@angular/core';


declare const jQuery: any;
@Directive({
    selector: '[appShowPassword]'
})
export class ShowPasswordDirective {

    /**
     * indica si se esta mostrando la contraseña
     */
    showing: boolean;


    /**
     * continene el elemento QUE funcionara como toogle
     */
    buttonToggle: any;


    /**
     * contiene el elemento QUE envolvera el boton toogle
     */
    wrapperButton: any;


    constructor(private element: ElementRef) {
        this.showing = false;
        this.buttonToggle = null;
        this.wrapperButton = null;
    }

    ngAfterViewInit() {
        // cargamos cuando el elemento este trabajando
        this.load();
    }

    /**
     * permite cargar la funcionalidad de la directiva
     */
    private load() {

        // creamos los elementos
        this.buttonToggle = jQuery('<span>Mostrar</span>');
        this.wrapperButton = jQuery('<div class="show-hide"></div>');
        
        // agregamos el wrapper al lado del input[type="password"]
        jQuery(this.element.nativeElement).after(this.wrapperButton);

        // agregamos el button al lugar donde le corresponde
        this.wrapperButton.html(this.buttonToggle);

        // creamos el listener sobre el boton 
        this.buttonToggle
            .click(() => {

                // verificamos si se esta mostrando la contraseña o no
                // y apartir de alli la ocultamos o la mostramos
                if(this.showing){
                    jQuery(this.element.nativeElement).attr("type", "password");
                    this.buttonToggle.text("Mostrar");
                    this.showing = false;
                } else {
                    jQuery(this.element.nativeElement).attr("type", "text");
                    this.buttonToggle.text("Ocultar");
                    this.showing = true;
                }

            });
    }

}
