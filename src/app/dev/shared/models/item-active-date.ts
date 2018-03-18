import { WeekDays } from './week-days';
import { ExclusiveDate } from './exclusive-date';

export class ItemActiveDate {
    from: string;
    to: string;
    byWeekDays: boolean;
    byDates: boolean;
    weekDays: WeekDays;
    exclusiveDates: ExclusiveDate[];
    constructor() {
        this.from = '01-05-1944';
        this.to = '01-05-1966';
        this.byWeekDays = true;
        this.byDates = false;
        this.weekDays = new WeekDays();
        this.exclusiveDates = [new ExclusiveDate()];
    }
}
