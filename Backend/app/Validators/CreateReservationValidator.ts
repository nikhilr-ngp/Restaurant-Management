import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class CreateReservationValidator {
  public schema = schema.create({
    user_id: schema.number([
      rules.exists({ table: 'users', column: 'id' }),
    ]),
    reservation_time: schema.date(),
    numGuests: schema.number([
      rules.range(1, 20),
    ]),
    status: schema.enum(['pending', 'confirmed', 'cancelled']),
  })

  public messages = {
    'user_id.required': 'User ID is required',
    'user_id.exists': 'User ID must exist in users table',
    'reservation_time.required': 'Reservation time is required',
    'numGuests.required': 'Number of guests is required',
    'numGuests.range': 'Number of guests must be between 1 and 20',
    'status.required': 'Reservation status is required',
    'status.enum': 'Status must be either pending, confirmed, or cancelled',
  }
}
