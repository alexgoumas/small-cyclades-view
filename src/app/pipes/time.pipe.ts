import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'time',
    pure: false
})

export class TimePipe implements PipeTransform {
    transform(value: any, timeFormat: string  = "H:mm"): any {
        return moment(value).format(timeFormat);
    }
}
