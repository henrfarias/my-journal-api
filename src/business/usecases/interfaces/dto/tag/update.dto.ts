import { Tag } from '@domain/entity/tag'
import { Payload } from '@domain/service/interfaces/token.service'
import { Either } from 'shared/either'
import { IError } from 'shared/either/left'

export interface InputUpdateTagDTO {
  tagId: string
  user: Payload
  data: Partial<Pick<Tag, 'name' | 'hexColor'>>
}

export type OutputUpdateTagDTO = Either<IError, undefined>
