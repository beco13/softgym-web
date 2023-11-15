import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

declare const moment: any;

@Directive({
  selector: '[appDateIssued]',
  providers: [{ provide: NG_VALIDATORS, useExisting: DateIssuedDirective, multi: true }]
})
export class DateIssuedDirective implements Validator {

  @Input('appDateIssued')
  dateIssued: any;

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
      
      // si la fecha es menor a 18 es por que es menor de edad
      if (tmpDate > today) {            
          return {
              dateIssued: true
          };
      }

      return null;
  }

  registerOnValidatorChange?(fn: () => void): void {
      //throw new Error('Method not implemented.');
  }


}
