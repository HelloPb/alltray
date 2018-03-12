import { Bhs } from './bhs';

export class ExclusiveDate {
    from: string;
    to: string;
    bhs: Bhs[];
    constructor() {
        this.from = '01-05-1982';
        this.to = '01-05-2053';
        this.bhs = [new Bhs()];
    }
}
