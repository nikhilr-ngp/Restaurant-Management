import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class CreateUser {
  public schema = schema.create({
    name: schema.string({ trim: true }, [
      rules.minLength(3),
    ]),
    email: schema.string({}, [
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    password: schema.string({}, [
      rules.minLength(8),
    ]),
  })

  public messages = {
    'name.required': 'Name is required',
    'email.email': 'Email must be a valid email address',
    'email.unique': 'Email is already registered',
    'password.minLength': 'Password should have at least 8 characters',
  }
}
 