import { Provider } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { DomainExceptionFilter } from "./domain-exception.filter";

export const provideFilters: Provider[] = [
    {
        provide: APP_FILTER,
        useClass: DomainExceptionFilter,
    },
]