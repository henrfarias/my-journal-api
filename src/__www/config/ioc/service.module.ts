import { EncryptServiceToken } from '@domain/service/interfaces/encrypt.service'
import { TokenServiceToken } from '@domain/service/interfaces/token.service'
import { BCryptEncryptService } from '@web/services/bcrypt-encrypt.service'
import { JWTTokenService } from '@web/services/jwt-token.service'
import { ContainerModule, interfaces } from 'inversify'

export const serviceModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(EncryptServiceToken).to(BCryptEncryptService)
  bind(TokenServiceToken).to(JWTTokenService)
})
