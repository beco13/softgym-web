import { Customer } from "./customer";
import { Membership } from "./membership";

export class MembershipView extends Membership{

    customer: Customer;

    constructor(){
        super();
        this.customer = null;
    }
}
