import { EmailVO } from "../value-objects/email.vo";
import { PasswordVO } from "../value-objects/password.vo";

export interface IUserProps {
    name: string;
    email: EmailVO;
    password: PasswordVO;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export class User {

    private readonly _id: string;
    private _props: IUserProps;

    constructor(props: IUserProps, id?: string) {
        this._props = {
            ...props
        };

        this._id = id ?? crypto.randomUUID();
        this._props.createdAt = props.createdAt ?? new Date();
        this._props.updatedAt = props.updatedAt ?? new Date();
    }

    updateName(name: string) {
        this._props.name = name;
        this._props.updatedAt = new Date();
    }

    updateEmail(email: EmailVO) {
        this._props.email = email;
        this._props.updatedAt = new Date();
    }

    updatePassword(password: PasswordVO) {
        this._props.password = password;
        this._props.updatedAt = new Date();
    }

    updateStatus(active: boolean) {
        this._props.active = active;
        this._props.updatedAt = new Date();
    }

    get id(): string {
        return this._id;
    }

    get name() {
        return this._props.name;
    }

    get password() {
        return this._props.password;
    }

    get active() {
        return this._props.active;
    }

    get email() {
        return this._props.email;
    }

    get createdAt() {
        return this._props.createdAt;
    }

    get updatedAt() {
        return this._props.updatedAt;
    }
}
