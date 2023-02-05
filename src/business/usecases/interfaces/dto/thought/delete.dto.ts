import { Payload } from '@domain/service/interfaces/token.service'
import { Either } from 'shared/either'
import { IError } from 'shared/either/left'

export interface InputDeleteThoughtDTO {
  thoughtId: string
  user: Payload
}

export type OutputDeleteThoughtDTO = Either<IError, undefined>
