import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class MenuItem extends BaseModel {
  protected tableName = 'menu_items' 
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public price: number

  @column()
  public available: boolean

}
