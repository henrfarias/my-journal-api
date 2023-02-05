import { NextFunction, Request, Response } from 'express'
import Joi, { ObjectSchema } from 'joi'

export const validator = (schema: ObjectSchema) => {
  return async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const { error, value } = schema.validate(joinRequest(req), {
      abortEarly: false,
      messages,
      stripUnknown: true
    })

    if (error) {
      return res.status(400).json({ error: buildErrorMessages(error) })
    }
    req.body = value
    next()
  }
}

const joinRequest = (req: Request): { [key: string]: any } => {
  return {
    ...req.body,
    ...req.params,
    ...req.query,
    user: req.user
  }
}

const buildErrorMessages = (
  error: Joi.ValidationError
): Array<{
  field: string | undefined
  key: string
}> => {
  return error.details.map(value => {
    const { context, message } = value

    return {
      field: context?.label,
      key: message
    }
  })
}

const messages = {
  'any.required': 'field.required',
  'string.email': 'invalid.email',
  'string.min': 'min.value',
  'cpf.invalid': 'invalid.cpf',
  'object.unknown': 'field.not.allowed'
}
