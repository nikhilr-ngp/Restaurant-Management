import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import CreateUserValidator from 'App/Validators/CreateUserValidator'

export default class UsersController {
  public async all_users({ response }: HttpContextContract) {
    const users = await User.all()
    return response.ok(users)
  }

  public async create_users({ request, response }: HttpContextContract) {
    const userData = await request.validate(CreateUserValidator)

    const user = await User.create(userData)
    return response.created({ message: 'User created', user })
  }

  public async update_user({ params, request, response }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    const validatedData = await request.validate(CreateUserValidator)

    user.merge(validatedData)
    await user.save()
    return response.ok({ message: 'User updated', user })
  }

  public async delete_user({ params, response }: HttpContextContract) {
    const user = await User.findOrFail(params.id)
    await user.delete()
    return response.ok({ message: 'User deleted' })
  }
}
