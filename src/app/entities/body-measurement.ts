export class BodyMeasurement {

    _id: string;
    shoulder: number;
    waist: number;
    collar: number;
    biceps: number;
    buttocks: number;
    calf: number;
    remarks: string;
    customer_id: string;
    date: number;
    created: number;

    constructor(){

        this._id = null;
        this.shoulder = 0;
        this.waist = 0;
        this.collar = 0;
        this.biceps = 0;
        this.buttocks = 0;
        this.calf = 0;
        this.remarks = null;
        this.customer_id = null;
        this.date = null;
        this.created = null;

    }

}
