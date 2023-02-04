import { InputRegisterDTO } from "@business/usecases/interfaces/dto/user/register.dto"
import { UserEntity } from "@domain/entity/user"

export const UserRepositoryToken = Symbol.for('UserRepository')

export interface UserRepository {
  register(input: InputRegisterDTO): Promise<UserEntity>
  IsAlreadyExists(nickname: string): Promise<boolean> 
}