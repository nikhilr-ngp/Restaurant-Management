import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MenuItem from 'App/Models/MenuItem'
import CreateMenuItemValidator from 'App/Validators/CreateMenuItemValidator'

export default class MenuItemsController {
  public async show_menu({ response }: HttpContextContract) {
    const menuItems = await MenuItem.all()
    return response.ok(menuItems)
  }

  public async add_menu_item({ request, response }: HttpContextContract) {
    const menuItemData = await request.validate(CreateMenuItemValidator)

    const menuItem = await MenuItem.create(menuItemData)
    return response.created({ message: 'Menu item created', menuItem })
  }

  public async update_menu({ params, request, response }: HttpContextContract) {
    const menuItem = await MenuItem.findOrFail(params.id)
    const validatedData = await request.validate(CreateMenuItemValidator)

    menuItem.merge(validatedData)
    await menuItem.save()
    return response.ok({ message: 'Menu item updated', menuItem })
  }
}
