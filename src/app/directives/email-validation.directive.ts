import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmailValidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidationDirective, multi: true }]
})
export class EmailValidationDirective implements Validator {

  @Input('appEmailValidation')
  emailValidation: any;

  constructor() {

  }
  validate(control: AbstractControl): ValidationErrors {
     // si viene vacio indicamos que es requerido
     if (control.value == null) {
      return {
          required: true
      };
  }

    let EMAIL_REGEX = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!control.value.match(EMAIL_REGEX)) {

      return {
        emailValidation: true
      };
    }
    return null
  }

  registerOnValidatorChange?(fn: () => void): void {
    //throw new Error('Method not implemented.');
  }


}
