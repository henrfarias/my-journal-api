import { inject, injectable } from 'inversify'
import { Usecase } from '@business/usecases/interfaces/usecase'
import {
  InputRegisterDTO,
  OutputRegisterDTO
} from '../interfaces/dto/user/register.dto'
import { left, right } from 'shared/either'
import {
  UserRepository,
  UserRepositoryToken
} from '@business/repositories/user.repository'
import { User } from '@domain/entity/user'

@injectable()
export class RegisterUserUseCase
  implements Usecase<InputRegisterDTO, OutputRegisterDTO>
{
  constructor(
    @inject(User) private user: User,
    @inject(UserRepositoryToken) private userRepository: UserRepository
  ) {}

  async exec(input: InputRegisterDTO): Promise<OutputRegisterDTO> {
    try {
      this.user.set(input)
      this.user.encodePassword()
      await this.userRepository.register(this.user.get())
      return right(undefined)
    } catch (err) {
      console.log(err)
      return left({
        message: 'Something wrong happened in user registration',
        statusCode: 500
      })
    }
  }
}
