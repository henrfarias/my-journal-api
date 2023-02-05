import { InputDeleteTagDTO } from '@business/usecases/interfaces/dto/tag/delete.dto'
import { DeleteTagUseCase } from '@business/usecases/tag/delete'
import { inject, injectable } from 'inversify'
import { left, right } from 'shared/either'
import { Controller, ControllerResponse } from '../interfaces/controller'

@injectable()
export class DeleteTagController
  implements Controller<InputDeleteTagDTO>
{
  constructor(
    @inject(DeleteTagUseCase) private deleteTag: DeleteTagUseCase
  ) {}

  async run(input: InputDeleteTagDTO): ControllerResponse {
    const result = await this.deleteTag.exec(input)
    if (result.isLeft()) return left(result.value)
    return right({ data: result.value, statusCode: 204 })
  }
}
