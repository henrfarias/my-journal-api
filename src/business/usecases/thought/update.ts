import {
  TagRepository,
  TagRepositoryToken
} from '@business/repositories/tag.repository'
import {
  DataToUpdate,
  ThoughtRepository,
  ThoughtRepositoryToken
} from '@business/repositories/thought.repository'
import { inject, injectable } from 'inversify'
import { left, right } from 'shared/either'
import {
  InputUpdateThoughtDTO,
  OutputUpdateThoughtDTO
} from '../interfaces/dto/thought/update.dto'
import { Usecase } from '../interfaces/usecase'

@injectable()
export class UpdateThoughtUseCase
  implements Usecase<InputUpdateThoughtDTO, OutputUpdateThoughtDTO>
{
  constructor(
    @inject(ThoughtRepositoryToken)
    private thoughtRepository: ThoughtRepository,
    @inject(TagRepositoryToken) private tagRepository: TagRepository
  ) {}

  async exec(input: InputUpdateThoughtDTO): Promise<OutputUpdateThoughtDTO> {
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
      let tagId = input.data?.tagId || null
      if (input.newTag && input.tagColor) {
        const existentTag = await this.tagRepository.findBy(
          'name',
          input.newTag
        )
        if (!existentTag) {
          const newTag = await this.tagRepository.create({
            name: input.newTag,
            hexColor: input.tagColor,
            authorId: input.user.id
          })
          tagId = newTag.id as string
        } else {
          tagId = existentTag.id as string
        }
      }
      // TODO: grab new attachments to update attachments list (it isn`t possible to delete an attachment here)
      // TODO: use attachmentService, implementation will be a aws sdk (S3)

      const data: DataToUpdate = {
        ...(input.data?.body && { body: input.data.body }),
        ...(tagId && { tagId })
        // TODO: attachments logic
      }
      await this.thoughtRepository.update(input.thoughtId, data)
      return right(undefined)
    } catch (err) {
      console.log(err)
      return left({
        message:
          'Algo de errado aconteceu ao atualizar seu pensamento. Por favor, tente novamente mais tarde',
        statusCode: 500
      })
    }
  }
}
