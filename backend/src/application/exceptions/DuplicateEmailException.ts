export class DuplicateEmailException extends Error {
    constructor(message: string = "Email already in use") {
        super(message);
        this.name = "DuplicateEmailException";
    }
}