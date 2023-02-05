import { InputTagListDTO } from '@business/usecases/interfaces/dto/tag/list.dto'
import { ListTagsUseCase } from '@business/usecases/tag/list'
import { inject, injectable } from 'inversify'
import { left, right } from 'shared/either'
import { Controller, ControllerResponse } from '../interfaces/controller'

@injectable()
export class ListTagsController implements Controller<InputTagListDTO> {
  constructor(@inject(ListTagsUseCase) private listTags: ListTagsUseCase) {}

  async run(input: InputTagListDTO): ControllerResponse {
    const result = await this.listTags.exec(input)
    if (result.isLeft()) return left(result.value)
    return right({ data: result.value, statusCode: 200 })
  }
}
