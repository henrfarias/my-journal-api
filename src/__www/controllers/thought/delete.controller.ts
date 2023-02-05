import { InputDeleteThoughtDTO } from '@business/usecases/interfaces/dto/thought/delete.dto'
import { DeleteThoughtUseCase } from '@business/usecases/thought/delete'
import { inject, injectable } from 'inversify'
import { left, right } from 'shared/either'
import { Controller, ControllerResponse } from '../interfaces/controller'

@injectable()
export class DeleteThoughtController
  implements Controller<InputDeleteThoughtDTO>
{
  constructor(
    @inject(DeleteThoughtUseCase) private deleteThought: DeleteThoughtUseCase
  ) {}

  async run(input: InputDeleteThoughtDTO): ControllerResponse {
    const result = await this.deleteThought.exec(input)
    if (result.isLeft()) return left(result.value)
    return right({ data: result.value, statusCode: 204 })
  }
}
