import { InputLoginDTO } from '@business/usecases/interfaces/dto/user/login.dto'
import { LoginUseCase } from '@business/usecases/user/login'
import { inject, injectable } from 'inversify'
import { left, right } from 'shared/either'
import { Controller, ControllerResponse } from '../interfaces/controller'

@injectable()
export class LoginController implements Controller<InputLoginDTO> {
  constructor(@inject(LoginUseCase) private login: LoginUseCase) {}

  async run(input: InputLoginDTO): ControllerResponse {
    const result = await this.login.exec(input)
    if (result.isLeft()) return left(result.value)
    return right({ data: result.value, statusCode: 200 })
  }
}
