export class Customer {

    _id: string;
    name: string;
    last_name: string;
    identification_number: string;
    phone: string;
    email: string;
    gender: "FEMALE" | "MALE";
    birth_date: number;
    remarks: string;
    entry_date: number;
    status: "ACTIVE" | "SUSPENDED";
    created: number;
    updated: number;

    constructor(){


                
        this._id = null;
        this.name = null;
        this.last_name = null;
        this.identification_number = null;
        this.phone = null;
        this.email = null;
        this.gender= null;
        this.birth_date = null;
        this.remarks = null;
        this.entry_date = null;
        this.status = "ACTIVE" ;
        this.created = null;
        this.updated = null;

    }
}
