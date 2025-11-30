import { EmailVO } from "../value-objects/email.vo";


export interface IUniqueEmailChecker {
  isEmailTaken(email: EmailVO): Promise<boolean>;
}

export class UniqueEmailService {
  constructor(private readonly emailChecker: IUniqueEmailChecker) {}

  async ensureEmailIsUnique(email: EmailVO): Promise<void> {
    const exists = await this.emailChecker.isEmailTaken(email);

    if (exists) {
      throw new Error(`Email already in use: ${email.value}`);
    }
  }
}
