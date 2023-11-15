export class CollectFund {

    _id: string;
    service: "CLASS" | "MEMBERSHIP";
    total_amount: number;
    user_id: string;
    customer_id: string;
    attend_id: string;
    membership_id: string;
    created: number;
    updated: number;


    constructor() {

        this._id = null;
        this.service = null;
        this.total_amount = 0;
        this.user_id = null;
        this.customer_id = null;
        this.attend_id = null;
        this.membership_id = null;
        this.created = null;
        this.updated = null;
    }
}
