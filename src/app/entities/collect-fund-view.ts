import { Attend } from "./attend";
import { CollectFund } from "./collect-fund";
import { Customer } from "./customer";
import { Membership } from "./membership";
import { User } from "./user";

export class CollectFundView extends CollectFund {
    
    customer: Customer;
    user: User;
    attend: Attend;
    membership: Membership;

    constructor() {
        super();
        this.customer = null;
        this.user = null;
        this.attend = null;
        this.membership = null;
    }

}
