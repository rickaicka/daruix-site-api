import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class Migrate1691635213274 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'divisions',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
            unsigned: true,
          },
          {
            name: 'divisionName',
            type: 'varchar',
            length: '127',
            isUnique: true,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
    await queryRunner.createTable(
      new Table({
        name: 'clients',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
            unsigned: true,
          },
          {
            name: 'clientName',
            type: 'varchar',
            length: '127',
            isUnique: true,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );

    await queryRunner.addColumn(
      'clients',
      new TableColumn({
        name: 'divisionId',
        type: 'int',
      }),
    );
    await queryRunner.createForeignKey(
      'clients',
      new TableForeignKey({
        columnNames: ['divisionId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'divisions',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('clients');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('divisionId') !== -1,
    );
    await queryRunner.dropForeignKey('clients', foreignKey);
    await queryRunner.dropColumn('clients', 'divisionId');
    await queryRunner.dropTable('clients');
    await queryRunner.dropTable('divisions');
  }
}
