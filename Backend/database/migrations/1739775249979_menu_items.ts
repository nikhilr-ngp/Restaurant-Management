import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MenuItems extends BaseSchema {
  protected tableName = 'menu_items'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.text('description')
      table.decimal('price', 8, 2).notNullable()
      table.boolean('available').defaultTo(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
