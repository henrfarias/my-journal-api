import { LoginUseCase } from '@business/usecases/user/login'
import { RegisterUserUseCase } from '@business/usecases/user/register'
import { ContainerModule, interfaces } from 'inversify'

export const usecaseModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(RegisterUserUseCase).toSelf()
  bind(LoginUseCase).toSelf()
})
