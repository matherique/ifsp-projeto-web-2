import { MigrationInterface, QueryRunner } from 'typeorm'

export class createAdminUser1626894337620 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO "user"
        (name, email, "password", created_at, updated_at, "permission")
        VALUES('Administrador', 'admin@admin.com', '$2b$12$eoczz.5fn9dBWJ90bmKAN.ihA/mD4SXr4TzSSdwxLXCOsMWbTJw5e', '2021-07-14 20:24:02.729', '2021-07-15 22:24:23.317', 'admin');
        `)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
