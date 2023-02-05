import {
  TagRepository,
  TagRepositoryToken
} from '@business/repositories/tag.repository'
import { inject, injectable } from 'inversify'
import { left, right } from 'shared/either'
import {
  InputDeleteTagDTO,
  OutputDeleteTagDTO
} from '../interfaces/dto/tag/delete.dto'
import { Usecase } from '../interfaces/usecase'

@injectable()
export class DeleteTagUseCase
  implements Usecase<InputDeleteTagDTO, OutputDeleteTagDTO>
{
  constructor(
    @inject(TagRepositoryToken) private tagRepository: TagRepository
  ) {}

  async exec(input: InputDeleteTagDTO): Promise<OutputDeleteTagDTO> {
    try {
      const tag = await this.tagRepository.findBy('id', input.tagId)
      if (!tag || tag.authorId !== input.user.id)
        return left({ message: 'Tag não encontrada...', statusCode: 404 })
      await this.tagRepository.delete(input.tagId)
      return right(undefined)
    } catch (err) {
      console.log(err)
      return left({
        message:
          'Algo de errado aconteceu ao deletar esta tag. Por favor, tente novamente mais tarde.',
        statusCode: 500
      })
    }
  }
}
