import { RoutineExercise } from "./routine-exercise";

export class Routine {

    _id: string;
    name: string;
    description: string;
    exercises: Array<RoutineExercise>;
    created: number;
    updated: number;

    constructor() {
        this._id = null;
        this.name = null;
        this.description = null;
        this.exercises = [];
        this.created = null;
        this.updated = null;
    }

}
