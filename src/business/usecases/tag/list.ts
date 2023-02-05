import {
  TagRepository,
  TagRepositoryToken
} from '@business/repositories/tag.repository'
import { inject, injectable } from 'inversify'
import { left, right } from 'shared/either'
import {
  InputTagListDTO,
  OutputTagListDTO
} from '../interfaces/dto/tag/list.dto'
import { Usecase } from '../interfaces/usecase'

@injectable()
export class ListTagsUseCase
  implements Usecase<InputTagListDTO, OutputTagListDTO>
{
  constructor(
    @inject(TagRepositoryToken) private tagRepository: TagRepository
  ) {}

  async exec(input: InputTagListDTO): Promise<OutputTagListDTO> {
    try {
      const list = await this.tagRepository.list(input.user.id)
      return right(list)
    } catch (err) {
      return left({
        message:
          'Não foi possível carregar suas tags agora. Por favor, tente mais tarde.',
        statusCode: 500
      })
    }
  }
}
