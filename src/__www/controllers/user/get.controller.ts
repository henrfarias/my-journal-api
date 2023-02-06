import { InputGetUserDTO } from '@business/usecases/interfaces/dto/user/get.dto'
import { GetUserUseCase } from '@business/usecases/user/get'
import { inject, injectable } from 'inversify'
import { left, right } from 'shared/either'
import { Controller, ControllerResponse } from '../interfaces/controller'

@injectable()
export class GetUserController implements Controller<InputGetUserDTO> {
  constructor(@inject(GetUserUseCase) private getUser: GetUserUseCase) {}

  async run(input: InputGetUserDTO): ControllerResponse {
    const result = await this.getUser.exec(input)
    if (result.isLeft()) return left(result.value)
    return right({ data: result.value, statusCode: 200 })
  }
}
