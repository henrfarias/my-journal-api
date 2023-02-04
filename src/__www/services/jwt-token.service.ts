import { injectable } from 'inversify'
import { TokenService } from '@domain/service/interfaces/token.service'
import jwt from 'jsonwebtoken'

@injectable()
export class JWTTokenService implements TokenService {
  sign(payload: { nickname: string; id: string }): string {
    const secret = process.env.SECRET
    if (!secret) throw new Error('SECRET not provided')
    return jwt.sign(payload, secret, { expiresIn: '1y'})
  }
}
