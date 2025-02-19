import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class CreateMenuItemValidator {
  public schema = schema.create({
    name: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.unique({ table: 'menu_items', column: 'name' }),
    ]),
    description: schema.string.optional({ trim: true }),
    price: schema.number([
      rules.range(1, 10000),
    ]),
    available: schema.boolean(),
  })

  public messages = {
    'name.required': 'Menu item name is required',
    'name.minLength': 'Menu item name must be at least 3 characters long',
    'name.unique': 'Menu item name must be unique',
    'price.required': 'Price is required',
    'price.range': 'Price must be between 1 and 10,000',
    'available.required': 'Availability status is required',
  }
}
