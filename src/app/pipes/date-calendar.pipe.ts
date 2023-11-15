import { Pipe, PipeTransform } from '@angular/core';

declare const moment:any;

@Pipe({
  name: 'dateCalendar'
})
export class DateCalendarPipe implements PipeTransform {

    transform(value: number): string {
        if(value === null){
            return null;
        }
        return moment(value).calendar();
    }

}
