
import { ListResponse as TagList } from '@business/repositories/tag.repository'
import { Payload } from '@domain/service/interfaces/token.service'
import { Either } from 'shared/either'
import { IError } from 'shared/either/left'

export interface InputTagListDTO {
  user: Payload
}

export type OutputTagListDTO = Either<IError, TagList>
