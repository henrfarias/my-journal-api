import { ContainerModule, interfaces } from 'inversify'
import { User } from '@domain/entity/user'

export const entityModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(User).toSelf()
})
