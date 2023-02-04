import { Left } from './left'

export class Right<L, R> {
  constructor(readonly value: R) {}

  public isLeft(): this is Left<L, R> {
    return false
  }

  public isRight(): this is Right<L, R> {
    return true
  }
}
