import { Injectable } from '@nestjs/common';
import { UniqueEmailService } from './domain/services/unique-email.service';
import { EmailVO } from './domain/value-objects/email.vo';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async checkEmail() {
    const uniqueEmailService = new UniqueEmailService({
      isEmailTaken: async (email: EmailVO) => {
        return email.value === 'test@example.com';
      }
    });

    const email = new EmailVO('test@example.com');

    uniqueEmailService.ensureEmailIsUnique(email)
      .then(() => {
        console.log('Email is unique');
      })
      .catch((error) => {
        console.error(error.message);
      });

  }
}
