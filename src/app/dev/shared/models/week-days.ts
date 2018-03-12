import { Bhs } from './bhs';

export class WeekDays {

    sun: Bhs[];
    mon: Bhs[];
    tue: Bhs[];
    wed: Bhs[];
    thu: Bhs[];
    fri: Bhs[];
    sat: Bhs[];
    constructor() {
        this.sun = [new Bhs()];
        this.mon = [new Bhs()];
        this.tue = [new Bhs()];
        this.wed = [new Bhs()];
        this.thu = [new Bhs()];
        this.fri = [new Bhs()];
        this.sat = [new Bhs()];
    }
}
