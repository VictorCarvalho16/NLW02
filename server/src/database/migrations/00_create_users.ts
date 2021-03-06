import Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('first_name').notNullable();
    table.string('last_name');
    table.string('email').notNullable();
    table.string('password').notNullable();
    table.string('avatar');
    table.string('whatsapp');
    table.string('bio');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users');
}
