import { Payload } from '@domain/service/interfaces/token.service'
import { Either } from 'shared/either'
import { IError } from 'shared/either/left'

export interface InputDeleteTagDTO {
  tagId: string
  user: Payload
}

export type OutputDeleteTagDTO = Either<IError, undefined>
