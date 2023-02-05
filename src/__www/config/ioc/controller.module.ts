import { ListThoughtsController } from '@web/controllers/thought/list.controller'
import { PostThoughtController } from '@web/controllers/thought/post.controller'
import { LoginController } from '@web/controllers/user/login.controller'
import { RegisterUserController } from '@web/controllers/user/register.controller'
import { ContainerModule, interfaces } from 'inversify'

export const controllerModule = new ContainerModule((bind: interfaces.Bind) => {
  // Public
  bind(RegisterUserController).toSelf()
  bind(LoginController).toSelf()

  // Thoughts
  bind(PostThoughtController).toSelf()
  bind(ListThoughtsController).toSelf()
})
