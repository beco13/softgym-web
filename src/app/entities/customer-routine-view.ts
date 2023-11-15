import { CustomerRoutine } from "./customer-routine";
import { Routine } from "./routine";
import { User } from "./user";

export class CustomerRoutineView extends CustomerRoutine{

    routine: Routine;
    user_coach: User;

    constructor(){
        super();
        this.routine = null;
        this.user_coach = null;
    }
}
