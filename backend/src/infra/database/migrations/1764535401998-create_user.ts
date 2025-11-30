import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUser1764535401998 implements MigrationInterface {

    private _TABLE_NAME = "users";

    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = new Table({
            name: this._TABLE_NAME,
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "uuid",
                },
                {
                    name: "name",
                    type: "varchar",
                    length: "200",
                    isNullable: false,
                },
                {
                    name: "email",
                    type: "varchar",
                    length: "150",
                    isUnique: true,
                    isNullable: false,
                },
                {
                    name: "password_hash",
                    type: "varchar",
                    length: "255",
                    isNullable: false,
                },
                {
                    name: "active",
                    type: "boolean",
                    default: true,
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()",
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    default: "now()",
                    onUpdate: "now()",
                },
            ]
        });

        await queryRunner.createTable(table);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this._TABLE_NAME);
    }

}
