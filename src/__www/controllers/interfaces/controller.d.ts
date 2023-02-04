import { Request, Response } from 'express'
import { Either } from 'shared/either'
import { IError } from 'shared/either/left'

export type ControllerResponse = Promise<
  Either<IError, { data: any; statusCode: number }>
>

export interface Controller<T = any> {
  run(input: T): ControllerResponse
}
