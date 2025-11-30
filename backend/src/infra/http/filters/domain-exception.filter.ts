import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpStatus,
    Logger,
} from '@nestjs/common';
import { InvalidEmailException } from 'src/domain/exceptions/InvalidEmailException';
import { InvalidPasswordException } from 'src/domain/exceptions/InvalidPasswordException';

const DOMAIN_EXCEPTION_MAP = new Map([
    [InvalidEmailException, HttpStatus.BAD_REQUEST],
    [InvalidPasswordException, HttpStatus.BAD_REQUEST],
]);

@Catch()
export class DomainExceptionFilter implements ExceptionFilter {

    private _logger = new Logger(DomainExceptionFilter.name);

    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse();

        for (const [ExceptionClass, statusCode] of DOMAIN_EXCEPTION_MAP.entries()) {
            if (exception instanceof ExceptionClass) {
                return res.status(statusCode).json({
                    statusCode,
                    message: exception.message,
                    error: HttpStatus[statusCode],
                });
            }
        }

        // fallback: joga para Nest tratar


        this._logger.error(`Unhandled exception: ${exception.message}`, exception.stack);
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: 'Internal server error',
            error: HttpStatus[HttpStatus.INTERNAL_SERVER_ERROR],
        });
    }
}
