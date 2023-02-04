import { inject, injectable } from 'inversify'
import { Controller, ControllerResponse } from '../interfaces/controller'
import { RegisterUserUseCase } from '@business/usecases/user/register'
import { InputRegisterDTO } from '@business/usecases/interfaces/dto/user/register.dto'
import { left, right } from 'shared/either'

@injectable()
export class RegisterUserController implements Controller<InputRegisterDTO> {
  constructor(
    @inject(RegisterUserUseCase) private registerUser: RegisterUserUseCase
  ) {}

  async run(input: InputRegisterDTO): ControllerResponse {
    console.log({ input })
    const result = await this.registerUser.exec(input)
    if (result.isLeft()) {
      return left(result.value)
    }
    return right({ data: result.value, statusCode: 201 })
  }
}
