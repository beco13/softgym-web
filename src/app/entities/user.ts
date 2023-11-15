export class User {

    _id: string;
    role: "ADMIN" | "COACH";
    username: string;
    password: string;
    status: "ACTIVE" | "BLOCKED";
    online: boolean;
    disconnected: number;
    created: number;
    updated: number;
    deleted: number;

    constructor() {
        this._id = null;
        this.role = null;
        this.username = null;
        this.password = null;
        this.status = null;
        this.online = false;
        this.disconnected = null;
        this.created = null;
        this.updated = null;
    }

}
