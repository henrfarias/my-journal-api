import { Payload } from '@domain/service/interfaces/token.service'
import { Either } from 'shared/either'
import { IError } from 'shared/either/left'

export interface InputPostDTO {
  body: string
  user: Payload
  tag: string | null
  tagColor?: string
  attachments: string | null
}

export type OutputPostDTO = Either<IError, undefined>
