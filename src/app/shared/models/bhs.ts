
export class HHMM {
    h: number;
    m: number;
    am: boolean;
    constructor() {
        this.h = 9;
        this.m = 0;
        this.am = true;
    }
}

export class Bhs {
    from: HHMM;
    to: HHMM;
    constructor() {
        this.from = new HHMM();
        this.to = new HHMM();
    }
}
