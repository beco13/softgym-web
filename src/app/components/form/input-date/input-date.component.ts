import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


declare const jQuery: any;
declare const moment: any;

@Component({
    selector: 'app-input-date',
    templateUrl: './input-date.component.html',
    styleUrls: ['./input-date.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: InputDateComponent
        }
    ]
})
export class InputDateComponent implements ControlValueAccessor {

    private _date: number;

    @Input()
    label: string;

    @Input()
    iconClass: string;

    @Input()
    required: boolean;

    @Input()
    helpText: string;

    @ViewChild('InputDate')
    InputDate: ElementRef;

    constructor() {
        this.label = null;
        this.iconClass = "icon-calendar";
        this.required = false;
        this.helpText = null;
    }

    get date(): number {
        return this._date;
    }

    set date(value: number) {
        this._date = value;
        this.onChange(value);
        this.onTouched();
    }

    onChange = (date: number) => { };

    onTouched = () => { };

    render() {
        if(this.InputDate){
            if(this._date === null){
                jQuery(this.InputDate.nativeElement).val('');
            }else{
                jQuery(this.InputDate.nativeElement).val(moment(this._date).format('YYYY-MM-DD'));
            }
        }
    }
    
    ngAfterViewInit() {
        // cargamos cuando el elemento este trabajando
        this.load();
        this.render();
    }


    load() {
        jQuery(this.InputDate.nativeElement)
            .bind('blur', () => {
                this.onTouched();
            })
            .bind('change', () => {

                // pasamos el valor a una variable para poderlo trabajar
                let tmpDate = this.InputDate.nativeElement.value;

                // verificamos que el usuario no le haya dado en borrar o algo asi
                if (tmpDate.trim() === "") {
                    // nulleamos
                    tmpDate = null;
                } else {

                    // organizamos la fecha y hora
                    const dateObj = new Date(tmpDate + " 07:00:00");
                    tmpDate = dateObj.getTime();
                }

                this._date = tmpDate;
                this.onChange(tmpDate);
            })
    }

    writeValue(date: number): void {
        this._date = date;
        this.render();
    }

    registerOnChange(fn: (date: number) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        if (isDisabled) {
            jQuery(this.InputDate.nativeElement).attr('disabled', 'disabled');
        } else {
            jQuery(this.InputDate.nativeElement).removeAttr('disabled');
        }
    }


    

}
