import { injectable } from 'inversify'
import { Payload, TokenService } from '@domain/service/interfaces/token.service'
import jwt from 'jsonwebtoken'

@injectable()
export class JWTTokenService implements TokenService {
  sign(payload: Payload): string {
    const secret = process.env.SECRET
    if (!secret) throw new Error('SECRET not provided')
    return jwt.sign(payload, secret, { expiresIn: '1y' })
  }

  verify(token: string): Payload | null {
    try {
      const secret = process.env.SECRET
      if (!secret) throw new Error('SECRET not provided')
      const payload = jwt.verify(token, secret) as Payload
      return payload
    } catch (err) {
      console.log(err)
      return null
    }
  }
}
