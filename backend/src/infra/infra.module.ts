import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import dataSource from "./database/data-source";

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
    exports: [
        TypeOrmModule,
    ],
})
export class InfraModule { }