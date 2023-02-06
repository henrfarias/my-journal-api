import { UserEntity } from '@domain/entity/user'
import { Payload } from '@domain/service/interfaces/token.service'
import { Either } from 'shared/either'
import { IError } from 'shared/either/left'

export interface InputGetUserDTO {
  user: Payload
}

export type OutputGetUserDTO = Either<IError, Omit<UserEntity, 'password'>>
