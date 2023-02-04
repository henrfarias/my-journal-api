import {
  UserRepository,
  UserRepositoryToken
} from '@business/repositories/user.repository'
import { User } from '@domain/entity/user'
import { inject, injectable } from 'inversify'
import { left, right } from 'shared/either'
import { IError } from 'shared/either/left'
import { InputLoginDTO, OutputLoginDTO } from '../interfaces/dto/user/login.dto'
import { Usecase } from '../interfaces/usecase'

@injectable()
export class LoginUseCase implements Usecase<InputLoginDTO, OutputLoginDTO> {
  private INVALID_LOGIN: IError

  constructor(
    @inject(User) private user: User,
    @inject(UserRepositoryToken) private userRepository: UserRepository
  ) {
    this.INVALID_LOGIN = {
      message: 'nickname ou senha inválidos',
      statusCode: 400
    }
  }

  async exec(input: InputLoginDTO): Promise<OutputLoginDTO> {
    const userData = await this.userRepository.findBy(
      'nickname',
      input.nickname
    )
    if (!userData) return left(this.INVALID_LOGIN)
    this.user.set(userData)
    const isCorrectPassword = this.user.comparePassword(input.password)
    if (!isCorrectPassword) return left(this.INVALID_LOGIN)
    return right({ token: '' })
  }
}
