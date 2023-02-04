import { BCryptEncryptService } from '@domain/service/encrypt.service'
import { EncryptServiceToken } from '@domain/service/interfaces/encrypt'
import { ContainerModule, interfaces } from 'inversify'

export const serviceModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(EncryptServiceToken).to(BCryptEncryptService)
})
