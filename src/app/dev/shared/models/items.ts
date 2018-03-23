import { ItemActiveDate } from './item-active-date';

export class Item {
    id: string;
    name: string;
    description: string;
    stocks: string;
    unlimited: boolean;
    pricePerStock: string;
    noOfPeices: string;
    dates: ItemActiveDate[];
    constructor() {
        this.id = '0';
        this.name = '';
        this.description = '';
        this.stocks = '';
        this.unlimited = false;
        this.pricePerStock = '';
        this.noOfPeices = '';
        this.dates = [new ItemActiveDate()];
    }
}
