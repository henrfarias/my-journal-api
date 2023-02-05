import { DeleteThoughtUseCase } from '@business/usecases/thought/delete'
import { ListThoughtsUseCase } from '@business/usecases/thought/list'
import { PostThoughtUseCase } from '@business/usecases/thought/post'
import { LoginUseCase } from '@business/usecases/user/login'
import { RegisterUserUseCase } from '@business/usecases/user/register'
import { ContainerModule, interfaces } from 'inversify'

export const usecaseModule = new ContainerModule((bind: interfaces.Bind) => {
  // public
  bind(RegisterUserUseCase).toSelf()
  bind(LoginUseCase).toSelf()
  
  // Thought
  bind(PostThoughtUseCase).toSelf()
  bind(ListThoughtsUseCase).toSelf()
  bind(DeleteThoughtUseCase).toSelf()
})
