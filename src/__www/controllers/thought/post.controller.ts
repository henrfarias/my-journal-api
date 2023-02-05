import { InputPostDTO } from '@business/usecases/interfaces/dto/thought/post.dto'
import { PostThoughtUseCase } from '@business/usecases/thought/post'
import { inject, injectable } from 'inversify'
import { left, right } from 'shared/either'
import { Controller, ControllerResponse } from '../interfaces/controller'

@injectable()
export class PostThoughtController implements Controller<InputPostDTO> {
  constructor(
    @inject(PostThoughtUseCase) private postThought: PostThoughtUseCase
  ) {}

  async run(input: InputPostDTO): ControllerResponse {
    const result = await this.postThought.exec(input)
    if (result.isLeft()) return left(result.value)
    return right({ data: result.value, statusCode: 201 })
  }
}
