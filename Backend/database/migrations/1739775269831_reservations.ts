import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Reservations extends BaseSchema {
  protected tableName = 'reservations'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.timestamp('reservation_time').notNullable()
      table.integer('num_guests').notNullable()
      table.enum('status', ['pending', 'confirmed', 'cancelled']).defaultTo('pending')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
