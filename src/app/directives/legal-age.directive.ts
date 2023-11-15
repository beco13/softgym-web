import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';



declare const moment: any;


@Directive({
    selector: '[appLegalAge]',
    providers: [{ provide: NG_VALIDATORS, useExisting: LegalAgeDirective, multi: true }]
})
export class LegalAgeDirective implements Validator {

    @Input('appLegalAge')
    legalAge: any;

    constructor() {

    }
    validate(control: AbstractControl): ValidationErrors {

        // si viene vacio indicamos que es requerido
        if (control.value == null) {
            return {
                required: true
            };
        }

        const tmpDate = moment(control.value);
        const today = moment();
        const years = today.diff(tmpDate, 'years');
        
        // si la fecha es menor a 18 es por que es menor de edad
        if (years < 18) {            
            return {
                appLegalAge: true
            };
        }

        return null;
    }

    registerOnValidatorChange?(fn: () => void): void {
        //throw new Error('Method not implemented.');
    }

}
