import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class LoginValidator {
  public schema = schema.create({
    email: schema.string({}, [
      rules.email(),
    ]),
    password: schema.string({}, [
      rules.minLength(6),
    ]),
  })

  public messages = {
    'email.required': 'Email is required',
    'email.email': 'Email must be a valid email address',
    'password.required': 'Password is required',
    'password.minLength': 'Password must be at least 6 characters long',
  }
}
