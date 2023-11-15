import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appOnlyNumber]',
  providers: [{ provide: NG_VALIDATORS, useExisting: OnlyNumberDirective, multi: true }]
})
export class OnlyNumberDirective implements Validator{

  @Input('appOnlyNumber')
  tmpNumber: any;

  constructor() {

  }
  validate(control: AbstractControl): ValidationErrors {

     // si viene vacio indicamos que es requerido
     if (control.value == null) {
      return {
          required: true
      };
  }
   
    let NUM_REGEX = /^([0-9])*$/;

    if (!control.value.match(NUM_REGEX)) {

      return {
        tmpNumber: true
      };
    }
    return null
  }

  registerOnValidatorChange?(fn: () => void): void {
    //throw new Error('Method not implemented.');
  }

}
