import { InputUpdateThoughtDTO } from '@business/usecases/interfaces/dto/thought/update.dto'
import { UpdateThoughtUseCase } from '@business/usecases/thought/update'
import { inject, injectable } from 'inversify'
import { left, right } from 'shared/either'
import { Controller, ControllerResponse } from '../interfaces/controller'

@injectable()
export class UpdateThoughtController
  implements Controller<InputUpdateThoughtDTO>
{
  constructor(
    @inject(UpdateThoughtUseCase) private updateThought: UpdateThoughtUseCase
  ) {}

  async run(input: InputUpdateThoughtDTO): ControllerResponse {
    const result = await this.updateThought.exec(input)
    if (result.isLeft()) return left(result.value)
    return right({ data: result.value, statusCode: 204 })
  }
}
