import {
  TagRepository,
  TagRepositoryToken
} from '@business/repositories/tag.repository'
import { inject, injectable } from 'inversify'
import { left, right } from 'shared/either'
import {
  InputUpdateTagDTO,
  OutputUpdateTagDTO
} from '../interfaces/dto/tag/update.dto'
import { Usecase } from '../interfaces/usecase'

@injectable()
export class UpdateTagUseCase
  implements Usecase<InputUpdateTagDTO, OutputUpdateTagDTO>
{
  constructor(
    @inject(TagRepositoryToken) private tagRepository: TagRepository
  ) {}

  async exec(input: InputUpdateTagDTO): Promise<OutputUpdateTagDTO> {
    try {
      const tag = await this.tagRepository.findBy('id', input.tagId)
      if (!tag || tag.authorId !== input.user.id)
        return left({ message: 'Tag não encontrada...', statusCode: 404 })
      await this.tagRepository.update(input.tagId, input.data)
      return right(undefined)
    } catch (err) {
      console.log(err)
      return left({
        message:
          'Algo de errado aconteceu ao atualizar sua tag. Por favor, tente novamente mais tarde',
        statusCode: 500
      })
    }
  }
}
