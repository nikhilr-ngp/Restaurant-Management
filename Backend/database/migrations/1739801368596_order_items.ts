import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class OrderItems extends BaseSchema {
  protected tableName = 'order_items'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('order_id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.integer('menu_item_id').unsigned().references('id').inTable('menu_items').onDelete('CASCADE')
      table.integer('quantity').notNullable()
      table.float('price')
      table.decimal('subtotal', 8, 2)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
