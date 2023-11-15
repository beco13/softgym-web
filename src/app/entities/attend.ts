export class Attend {

    _id: string;
    entry_date: number;
    departure_date: number;
    status: "ITS_HERE" | "ITS_GONE";
    customer_id: string;
    created: number;
    updated: number;

    constructor() {
        this._id = null;
        this.entry_date = null;
        this.departure_date = null;
        this.status = null;
        this.customer_id = null;
        this.created = null;
        this.updated = null;
    }
}
