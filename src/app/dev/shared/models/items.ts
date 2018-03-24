import { ItemActiveDate } from './item-active-date';

export class Item {
    id: string;
    name: string;
    description: string;
    stock: string;
    remainig: string;
    unlimited: boolean;
    pps: string;
    nops: string;
    img: string;
    dates: ItemActiveDate[];
    constructor() {
        this.id = undefined;
        this.name = '';
        this.description = '';
        this.stock = '';
        this.unlimited = false;
        this.pps = '';
        this.nops = '';
        this.img = '#';
        this.dates = [new ItemActiveDate()];
    }
}
