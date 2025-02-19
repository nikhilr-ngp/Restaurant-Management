import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class CreateUserValidator {
  public schema = schema.create({
    name: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.maxLength(30),
    ]),
    email: schema.string({}, [
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    password: schema.string({}, [
      rules.minLength(8),
      rules.maxLength(16),
    ]),
  })

  public messages = {
    'name.required': 'Name is required',
    'name.minLength': 'Name must be at least 3 characters long',
    'email.required': 'Email is required',
    'email.email': 'Email must be valid',
    'email.unique': 'Email is already registered',
    'password.required': 'Password is required',
    'password.minLength': 'Password must be at least 8 characters long',
  }
}
