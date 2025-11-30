import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateProduct1764535413862 implements MigrationInterface {

    private _TABLE_NAME = "products";

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
                    name: "description",
                    type: "varchar",
                    length: "500",
                    isNullable: true,
                },
                {
                    name: "price",
                    type: "decimal",
                    precision: 10,
                    scale: 2,
                    isNullable: false,
                },
                {
                    name: "stock",
                    type: "int",
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
