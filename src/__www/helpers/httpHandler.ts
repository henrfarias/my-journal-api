import { Controller } from '@web/controllers/interfaces/controller'
import { Handler, Request, Response } from 'express'

export const httpHandler = (controller: Controller): Handler => {
  return async (req: Request, res: Response): Promise<void> => {
    const input = req.body
    const result = await controller.run(input)
    if (result.isLeft()) {
      res
        .status(result.value.statusCode)
        .json({ message: result.value.message })
      return
    }
    res.status(result.value.statusCode).json(result.value.data)
  }
}
