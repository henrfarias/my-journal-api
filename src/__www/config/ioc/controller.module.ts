import { DeleteTagController } from '@web/controllers/tag/delete.controller'
import { ListTagsController } from '@web/controllers/tag/list.controller'
import { UpdateTagController } from '@web/controllers/tag/update.controller'
import { DeleteThoughtController } from '@web/controllers/thought/delete.controller'
import { ListThoughtsController } from '@web/controllers/thought/list.controller'
import { PostThoughtController } from '@web/controllers/thought/post.controller'
import { UpdateThoughtController } from '@web/controllers/thought/update.controller'
import { GetUserController } from '@web/controllers/user/get.controller'
import { LoginController } from '@web/controllers/user/login.controller'
import { RegisterUserController } from '@web/controllers/user/register.controller'
import { ContainerModule, interfaces } from 'inversify'

export const controllerModule = new ContainerModule((bind: interfaces.Bind) => {
  // Public
  bind(RegisterUserController).toSelf()
  bind(LoginController).toSelf()

  // User
  bind(GetUserController).toSelf()

  // Thoughts
  bind(PostThoughtController).toSelf()
  bind(ListThoughtsController).toSelf()
  bind(DeleteThoughtController).toSelf()
  bind(UpdateThoughtController).toSelf()

  // Tags
  bind(DeleteTagController).toSelf()
  bind(UpdateTagController).toSelf()
  bind(ListTagsController).toSelf()
})
