import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Orders extends BaseSchema {
  protected tableName = 'orders'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.enum('status', ['pending', 'preparing', 'completed', 'cancelled']).defaultTo('pending')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
