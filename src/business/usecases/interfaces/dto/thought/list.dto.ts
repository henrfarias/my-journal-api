import { Tag } from '@domain/entity/tag'
import { Thought } from '@domain/entity/thought'
import { Payload } from '@domain/service/interfaces/token.service'
import { Either } from 'shared/either'
import { IError } from 'shared/either/left'

export interface InputListThoughtsDTO {
  page?: number
  limit?: number
  tagId?: string
  user: Payload
}

export interface ThoughtListData {
  page: number
  count: number
  data: Array<Thought & { tag: Tag | null }>
}

export type OutputListThoughtsDTO = Either<IError, ThoughtListData>
