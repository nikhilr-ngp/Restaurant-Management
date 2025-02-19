import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import OrderItem from 'App/Models/OrderItem'
import MenuItem from 'App/Models/MenuItem'
import CreateOrderItemValidator from 'App/Validators/CreateOrderItemValidator'

export default class OrderItemsController {
  public async orderitems({ params, response }: HttpContextContract) {
    const orderItems = await OrderItem.query()
      .where('order_id', params.order_id)
      .preload('menuItem')
    return response.ok(orderItems)
  }

  public async create_orderitems({ params, request, response }: HttpContextContract) {
    const validatedData = await request.validate(CreateOrderItemValidator)

    const menuItem = await MenuItem.find(validatedData.menuItemId)
    if (!menuItem) {
      return response.notFound({ message: 'Menu item not found' })
    }

    const price = menuItem.price
    const subtotal = price * validatedData.quantity

    const orderItem = await OrderItem.create({
      orderId: params.order_id,
      menuItemId: validatedData.menuItemId,
      quantity: validatedData.quantity,
      price,
      subtotal,
      userId: validatedData.userId,
    })

    return response.created({ message: 'Order item added', orderItem })
  }

  public async update_items({ params, request, response }: HttpContextContract) {
    const orderItem = await OrderItem.find(params.id)
    if (!orderItem) {
      return response.notFound({ message: 'Order item not found' })
    }

    const validatedData = await request.validate(CreateOrderItemValidator)

    const menuItem = await MenuItem.find(orderItem.menuItemId)
    if (!menuItem) {
      return response.notFound({ message: 'Menu item not found' })
    }

    orderItem.quantity = validatedData.quantity
    orderItem.subtotal = menuItem.price * validatedData.quantity

    await orderItem.save()

    return response.ok({ message: 'Order item updated', orderItem })
  }

  public async delete_items({ params, response }: HttpContextContract) {
    const orderItem = await OrderItem.find(params.id)
    if (!orderItem) {
      return response.notFound({ message: 'Order item not found' })
    }

    await orderItem.delete()
    return response.ok({ message: 'Order item deleted' })
  }
}
