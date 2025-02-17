import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import MenuItem from './MenuItem'
import User from './User' // Import the User model

export default class OrderItem extends BaseModel {
  protected tableName = 'order_items'

  @column({ isPrimary: true })
  public id: number

  @column()
  public orderId: number

  @column()
  public userId: number

  @column()
  public menuItemId: number

  @column()
  public quantity: number

  @column()
  public price: number 

  @column()
  public subtotal: number

  

  @belongsTo(() => MenuItem)
  public menuItem: BelongsTo<typeof MenuItem>

  @belongsTo(() => User) 
  public user: BelongsTo<typeof User>
}
