import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
    selector: '[appPasswordAgain]',
    providers: [{ provide: NG_VALIDATORS, useExisting: PasswordAgainDirective, multi: true }]
})
export class PasswordAgainDirective implements Validator {

    @Input('appPasswordAgain')
    appPasswordAgain: string;

    constructor() {

    }

    validate(control: AbstractControl): ValidationErrors {

         // si viene vacio indicamos que es requerido
      if (control.value == null) {
        return {
            required: true
        };
    }
        
        // si no son las mismas contraseñas
        if(control.value !== this.appPasswordAgain){
            return {
                appPasswordAgain: true
            };
        }

        return null;
    }


    registerOnValidatorChange?(fn: () => void): void {
        //throw new Error('Method not implemented.');
    }

}
