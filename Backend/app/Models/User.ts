import { BaseModel, column, beforeSave } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'

export default class User extends BaseModel {
  protected tableName = 'users'

  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column({ serializeAs: null }) 
  public password: string

  @column()
  public role: 'customer' | 'staff' | 'admin' 

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) { 
      user.password = await Hash.make(user.password)
    }
  }
}
