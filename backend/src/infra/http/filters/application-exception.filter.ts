import {
    ArgumentsHost,
    Catch,
    ExceptionFilter,
    HttpStatus,
    Logger,
} from '@nestjs/common';
import { DuplicateEmailException } from 'src/application/exceptions/DuplicateEmailException';
import { ProductNotFountException } from 'src/application/exceptions/ProductNotFountException';
import { ProductStockNotEnoughException } from 'src/application/exceptions/ProductStockNotEnoughException';
import { UserNotFoundException } from 'src/application/exceptions/UserNotFoundException';

const DOMAIN_EXCEPTION_MAP = new Map([
    [DuplicateEmailException, HttpStatus.BAD_REQUEST],
    [ProductStockNotEnoughException, HttpStatus.BAD_REQUEST],
    [ProductNotFountException, HttpStatus.NOT_FOUND],
    [UserNotFoundException, HttpStatus.NOT_FOUND],
]);

@Catch()
export class ApplicationExceptionFilter implements ExceptionFilter {

    private _logger = new Logger(ApplicationExceptionFilter.name);

    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const res = ctx.getResponse();

        for (const [ExceptionClass, statusCode] of DOMAIN_EXCEPTION_MAP.entries()) {
            if (exception instanceof ExceptionClass) {
                this._logger.warn(`Handled exception: ${exception.message}`);
                
                return res.status(statusCode).json({
                    statusCode,
                    message: exception.message,
                    error: HttpStatus[statusCode],
                });
            }
        }

        this._logger.error(`Unhandled exception: ${exception.message}`, exception.stack);
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
            message: 'Internal server error',
            error: HttpStatus[HttpStatus.INTERNAL_SERVER_ERROR],
        });
    }
}
