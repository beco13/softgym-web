export class CustomerRoutine {

    _id: string;
    is_active: boolean;
    remarks: string;
    customer_id: string;
    routine_id: string;
    user_coach_id: string;
    created: number;
    updated: number;

    constructor(){
        
        this._id = null;
        this.is_active = false;
        this.remarks = null;
        this.customer_id = null;
        this.routine_id = null;
        this.user_coach_id = null;
        this.created = null;
        this.updated = null;
    }

}
