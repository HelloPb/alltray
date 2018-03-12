import { ItemActiveDate } from './item-active-date';

export class Item {
    id: string;
    expand: boolean;
    dates: ItemActiveDate[];
    constructor() {
        this.id = '0';
        this.expand = false;
        this.dates = [new ItemActiveDate()];
    }
}
