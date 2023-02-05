import { Thought } from '@domain/entity/thought'
import { Payload } from '@domain/service/interfaces/token.service'
import { Either } from 'shared/either'
import { IError } from 'shared/either/left'

export interface InputUpdateThoughtDTO {
  thoughtId: string
  user: Payload
  data: Partial<Pick<Thought, 'body' | 'tagId'>>
  newTag?: string
  tagColor?: string
  newAttachments?: any[]
}

export type OutputUpdateThoughtDTO = Either<IError, undefined>
