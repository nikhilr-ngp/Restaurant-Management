import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class CreateOrderItemValidator {
  public schema = schema.create({
    menuItemId: schema.number([
      rules.exists({ table: 'menu_items', column: 'id' }),
    ]),
    quantity: schema.number([
      rules.range(1, 100),
    ]),
    userId: schema.number([
      rules.exists({ table: 'users', column: 'id' }),
    ]),
  })

  public messages = {
    'menuItemId.required': 'Menu item ID is required',
    'menuItemId.exists': 'Menu item must exist in the menu_items table',
    'quantity.required': 'Quantity is required',
    'quantity.range': 'Quantity must be between 1 and 100',
    'userId.required': 'User ID is required',
    'userId.exists': 'User must exist in the users table',
  }
}
