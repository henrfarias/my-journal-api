import { InputUpdateTagDTO } from '@business/usecases/interfaces/dto/tag/update.dto'
import { UpdateTagUseCase } from '@business/usecases/tag/update'
import { inject, injectable } from 'inversify'
import { left, right } from 'shared/either'
import { Controller, ControllerResponse } from '../interfaces/controller'

@injectable()
export class UpdateTagController
  implements Controller<InputUpdateTagDTO>
{
  constructor(
    @inject(UpdateTagUseCase) private updateTag: UpdateTagUseCase
  ) {}

  async run(input: InputUpdateTagDTO): ControllerResponse {
    const result = await this.updateTag.exec(input)
    if (result.isLeft()) return left(result.value)
    return right({ data: result.value, statusCode: 204 })
  }
}
