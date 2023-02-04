import { Right } from './right'

export interface IError {
  statusCode: number
  message: string
}

export class Left<L, R> {
  constructor(readonly value: L) {}

  public isLeft(): this is Left<L, R> {
    return true
  }

  public isRight(): this is Right<L, R> {
    return false
  }
}
