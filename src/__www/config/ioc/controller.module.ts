import { LoginController } from '@web/controllers/user/login.controller'
import { RegisterUserController } from '@web/controllers/user/register.controller'
import { ContainerModule, interfaces } from 'inversify'

export const controllerModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(RegisterUserController).toSelf()
  bind(LoginController).toSelf()
})
