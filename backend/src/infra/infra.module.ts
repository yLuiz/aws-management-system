import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import dataSource from "./database/data-source";
import { provideFilters } from "./http/filters/provide-filters";

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [dataSource],
        }),
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) =>
                configService.get('typeorm')!,
        }),
    ],
    providers: [
        ...provideFilters,
    ],
    exports: [
        TypeOrmModule,
    ],
})
export class InfraModule { }