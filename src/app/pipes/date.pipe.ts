import { Pipe, PipeTransform } from '@angular/core';

declare const moment:any;

@Pipe({
    name: 'date'
})
export class DatePipe implements PipeTransform {

    transform(value: number): string {
        return moment(value).format("MMMM D - YYYY");
        //return moment(value).format("dddd, MMMM Do YYYY, h:mm:ss a");
    }

}
