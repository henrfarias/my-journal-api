import {
  ThoughtRepository,
  ThoughtRepositoryToken
} from '@business/repositories/thought.repository'
import { inject, injectable } from 'inversify'
import { left, right } from 'shared/either'
import {
  InputDeleteThoughtDTO,
  OutputDeleteThoughtDTO
} from '../interfaces/dto/thought/delete.dto'
import { Usecase } from '../interfaces/usecase'

@injectable()
export class DeleteThoughtUseCase
  implements Usecase<InputDeleteThoughtDTO, OutputDeleteThoughtDTO>
{
  constructor(
    @inject(ThoughtRepositoryToken) private thoughtRepository: ThoughtRepository
  ) {}

  async exec(input: InputDeleteThoughtDTO): Promise<OutputDeleteThoughtDTO> {
    try {
      const thought = await this.thoughtRepository.findBy(
        input.thoughtId,
        input.user.id
      )
      if (!thought)
        return left({
          message: 'Pensamento não encontrado...',
          statusCode: 404
        })
      await this.thoughtRepository.delete(input.thoughtId)
      return right(undefined)
    } catch (err) {
      console.log(err)
      return left({
        message: 'Algo de errado aconteceu ao deletar seu pensamento.',
        statusCode: 500
      })
    }
  }
}
