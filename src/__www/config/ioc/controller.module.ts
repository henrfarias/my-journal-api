import { ContainerModule, interfaces } from 'inversify'
import { RegisterUserController } from '@web/controllers/user/registerController'

export const controllerModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(RegisterUserController).toSelf()
})
