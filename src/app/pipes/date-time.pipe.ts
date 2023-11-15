import { Pipe, PipeTransform } from '@angular/core';


declare const moment:any;

@Pipe({
    name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {

    transform(value: number): string {
        return moment(value).format("MMMM D - YYYY, h:mm a");
        //return moment(value).format("dddd, MMMM Do YYYY, h:mm:ss a");
    }

}
