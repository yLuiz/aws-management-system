export class InvalidPriceException extends Error {
    constructor(message: string = "Invalid price") {
        super(message);
        this.name = "InvalidPriceException";
    }
}