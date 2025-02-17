import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MenuItem from 'App/Models/MenuItem'

export default class MenuItemsController {
  public async show_menu({ response }: HttpContextContract) {
    const menuItems = await MenuItem.all()
    return response.ok(menuItems)
  }
  
  public async add_menu_item({ request, response }: HttpContextContract) {
    const menuItemData = request.only(['name', 'description', 'price', 'available'])

    const menuItem = await MenuItem.create(menuItemData)
    return response.created({ message: 'Menu item created', menuItem })
  }
  public async update_menu({ params, request, response }: HttpContextContract) {
    const menuItem = await MenuItem.findOrFail(params.id)
    menuItem.merge(request.only(['name', 'description', 'price', 'available']))
    await menuItem.save()
    return response.ok({ message: 'Menu item updated', menuItem })
  }

}
