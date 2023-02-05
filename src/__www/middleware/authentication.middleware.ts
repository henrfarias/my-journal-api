import { TokenService, TokenServiceToken } from '@domain/service/interfaces/token.service'
import { container } from '@web/config/ioc/inversify-config'
import { NextFunction, Request, Response } from 'express'

export const authenticationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.authorization)
    return res.status(401).json({ message: 'Não autorizado' })
  const [_, token] = req.headers.authorization.split(' ')
  const tokenService = container.get<TokenService>(TokenServiceToken)
  const payload = tokenService.verify(token)
  if (!payload) return res.status(401).json({ message: 'Não autorizado' })
  req.user = payload
  next()
}
