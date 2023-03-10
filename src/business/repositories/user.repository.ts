import { InputRegisterDTO } from '@business/usecases/interfaces/dto/user/register.dto'
import { UserEntity } from '@domain/entity/user'

export const UserRepositoryToken = Symbol.for('UserRepository')

export type FindByOptions = keyof Pick<UserEntity, 'name' | 'nickname' | 'id'>

export interface UserRepository {
  register(input: InputRegisterDTO): Promise<UserEntity>
  IsAlreadyExists(nickname: string): Promise<boolean>
  findBy(by: FindByOptions, value: string): Promise<UserEntity | null>
}
