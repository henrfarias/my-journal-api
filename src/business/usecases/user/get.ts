import {
  UserRepository,
  UserRepositoryToken
} from '@business/repositories/user.repository'
import { inject, injectable } from 'inversify'
import { left, right } from 'shared/either'
import {
  InputGetUserDTO,
  OutputGetUserDTO
} from '../interfaces/dto/user/get.dto'
import { Usecase } from '../interfaces/usecase'

@injectable()
export class GetUserUseCase
  implements Usecase<InputGetUserDTO, OutputGetUserDTO>
{
  constructor(
    @inject(UserRepositoryToken) private userRepository: UserRepository
  ) {}

  async exec(input: InputGetUserDTO): Promise<OutputGetUserDTO> {
    try {
      const user = await this.userRepository.findBy('id', input.user.id)
      if (!user)
        return left({ message: 'Usuário não encontrado...', statusCode: 404 })
      return right(user)
    } catch (err) {
      console.log(err)
      return left({
        message: 'Algo de errado aconteceu ao consultar seu usuário.',
        statusCode: 500
      })
    }
  }
}
