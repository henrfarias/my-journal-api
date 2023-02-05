import {
  ThoughtRepository,
  ThoughtRepositoryToken
} from '@business/repositories/thought.repository'
import { inject, injectable } from 'inversify'
import { left, right } from 'shared/either'
import {
  InputListThoughtsDTO,
  OutputListThoughtsDTO
} from '../interfaces/dto/thought/list.dto'
import { Usecase } from '../interfaces/usecase'

@injectable()
export class ListThoughtsUseCase
  implements Usecase<InputListThoughtsDTO, OutputListThoughtsDTO>
{
  constructor(
    @inject(ThoughtRepositoryToken) private thoughtRepository: ThoughtRepository
  ) {}

  async exec(input: InputListThoughtsDTO): Promise<OutputListThoughtsDTO> {
    try {
      const page = input.page || 1
      const limit = input.limit || 10
      const data = await this.thoughtRepository.list({
        page,
        limit,
        tagFilter: input?.tagId,
        authorId: input.user.id
      })
      return right({ page, count: data.length, data })
    } catch (err) {
      console.log(err)
      return left({
        message:
          'Algo de errado aconteceu ao listar seus pensamentos. Por favor, tente novamente mais tarde.',
        statusCode: 500
      })
    }
  }
}
