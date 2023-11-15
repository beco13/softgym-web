import { Attend } from "./attend";
import { Customer } from "./customer";

export class AttendView extends Attend{
    
    customer: Customer;

    constructor(){
        super();
        this.customer = null;
    }
}
