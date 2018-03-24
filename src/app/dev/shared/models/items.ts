import { ItemActiveDate } from './item-active-date';

export class Item {
    id: string;
    name: string;
    description: string;
    stocks: string;
    remainig: string;
    unlimited: boolean;
    pricePerStock: string;
    noOfPeices: string;
    img: string;
    dates: ItemActiveDate[];
    constructor() {
        this.id = undefined;
        this.name = '';
        this.description = '';
        this.stocks = '';
        this.unlimited = false;
        this.pricePerStock = '';
        this.noOfPeices = '';
        this.img = '';
        this.dates = [new ItemActiveDate()];
    }
}
