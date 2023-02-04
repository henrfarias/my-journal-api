import { Left } from './left'
import { Right } from './right'

export type Either<L, R> = Left<L, R> | Right<L, R>

export const right = <L, R>(value: R): Either<L, R> => {
  return new Right(value)
}

export const left = <L, R>(value: L): Either<L, R> => {
  return new Left(value)
}
