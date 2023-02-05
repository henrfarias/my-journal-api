import {
  TagRepository,
  TagRepositoryToken
} from '@business/repositories/tag.repository'
import {
  ThoughtRepository,
  ThoughtRepositoryToken
} from '@business/repositories/thought.repository'
import { inject, injectable } from 'inversify'
import { left, right } from 'shared/either'
import { InputPostDTO, OutputPostDTO } from '../interfaces/dto/thought/post.dto'
import { Usecase } from '../interfaces/usecase'

@injectable()
export class PostThoughtUseCase
  implements Usecase<InputPostDTO, OutputPostDTO>
{
  constructor(
    @inject(ThoughtRepositoryToken)
    private thoughtRepository: ThoughtRepository,
    @inject(TagRepositoryToken) private tagRepository: TagRepository
  ) {}

  async exec(input: InputPostDTO): Promise<OutputPostDTO> {
    try {
      let tagId = null
      if (input.tag && input.tagColor) {
        const existentTag = await this.tagRepository.findBy('name', input.tag)
        if (!existentTag) {
          const newTag = await this.tagRepository.create({
            name: input.tag,
            hexColor: input.tagColor,
            authorId: input.user.id
          })
          tagId = newTag.id as string
        } else {
          tagId = existentTag.id as string
        }
      }
      await this.thoughtRepository.create({
        body: input.body,
        authorId: input.user.id,
        attachments: input.attachments,
        tagId
      })
      return right(undefined)
    } catch (err) {
      console.log(err)
      return left({
        statusCode: 500,
        message:
          'Algo de errado aconteceu ao capturar seu pensamento. Por favor, tente novamente mais tarde'
      })
    }
  }
}
