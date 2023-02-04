import { UserEntity } from '@domain/entity/user'
import { Either } from 'shared/either'
import { IError } from 'shared/either/left'

export interface InputRegisterDTO extends UserEntity {}

export type OutputRegisterDTO = Either<IError, undefined>
