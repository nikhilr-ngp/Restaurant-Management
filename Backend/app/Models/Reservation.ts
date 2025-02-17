import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Reservation extends BaseModel {
  protected tableName = 'reservations'

  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column.dateTime()
  public reservationTime: DateTime

  @column()
  public numGuests: number

  @column()
  public status: 'pending' | 'confirmed' | 'cancelled'

 
  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
