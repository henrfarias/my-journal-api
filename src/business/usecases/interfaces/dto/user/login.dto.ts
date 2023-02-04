import { Either } from 'shared/either'
import { IError } from 'shared/either/left'

export interface InputLoginDTO {
  nickname: string
  password: string
}

export type OutputLoginDTO = Either<IError, { token: string }>
