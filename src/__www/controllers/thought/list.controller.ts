import { InputListThoughtsDTO } from '@business/usecases/interfaces/dto/thought/list.dto'
import { ListThoughtsUseCase } from '@business/usecases/thought/list'
import { inject, injectable } from 'inversify'
import { left, right } from 'shared/either'
import { Controller, ControllerResponse } from '../interfaces/controller'

@injectable()
export class ListThoughtsController
  implements Controller<InputListThoughtsDTO>
{
  constructor(
    @inject(ListThoughtsUseCase) private listThought: ListThoughtsUseCase
  ) {}

  async run(input: InputListThoughtsDTO): ControllerResponse {
    const result = await this.listThought.exec(input)
    if (result.isLeft()) return left(result.value)
    return right({ data: result.value, statusCode: 200 })
  }
}
