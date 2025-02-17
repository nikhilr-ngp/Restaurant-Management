import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Reservation from 'App/Models/Reservation'

export default class ReservationsController {
  public async all_reservations({ response }: HttpContextContract) {
    const reservations = await Reservation.all()
    return response.ok(reservations)
  }

  public async create_reservations({ request, response }: HttpContextContract) {
    const reservationData = request.only(['user_id', 'reservation_time', 'numGuests', 'status'])
    const reservation = await Reservation.create(reservationData)
    return response.created({ message: 'Reservation created', reservation })
  }


  public async update_reservations({ params, request, response }: HttpContextContract) {
    const reservation = await Reservation.findOrFail(params.id)
    reservation.merge(request.only(['user_id', 'table_id', 'reservation_time', 'status']))
    await reservation.save()
    return response.ok({ message: 'Reservation updated', reservation })
  }

  public async delete_reservations({ params, response }: HttpContextContract) {
    const reservation = await Reservation.findOrFail(params.id)
    await reservation.delete()

    return response.ok({ message: 'Reservation deleted' })
  }
}
