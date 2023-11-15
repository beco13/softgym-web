export class SocketError extends Error {

    data: {
        content: string,
        action: string
    }

    constructor(message: string) {
        super(message);
        this.data = null;
    }

}