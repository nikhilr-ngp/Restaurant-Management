import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import Hash from '@ioc:Adonis/Core/Hash'

export default class LoginController {
  public async login({ request, response }: HttpContextContract) {
    const { email, password } = request.only(['email', 'password'])

    const user = await User.findBy('email', email)
    if (!user) {
      return response.unauthorized({ message: 'Invalid credentials' })
    }

    const isPasswordValid = await Hash.verify(user.password, password)
    if (!isPasswordValid) {
      return response.unauthorized({ message: 'Invalid credentials' })
    }

    return response.ok({ message: 'Login successful', userId: user.id, name: user.name })
  }
}
