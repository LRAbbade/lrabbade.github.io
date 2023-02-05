export class Item {
    priceStr: string;

    constructor(
        public name: string,
        public description: string,
        public image: string,
        public price: number
    ) {
        this.priceStr = price.toFixed(2);
    }
}
