export class Membership {
    _id: string;
    start_date: number;
    expiration_date: number;
    customer__id: string;
    created: number;


    constructor() {
        this._id = null;
        this.start_date = null;
        this.expiration_date = null;
        this.customer__id = null;
        this.created = null;
    }
}
