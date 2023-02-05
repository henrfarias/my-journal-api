import { container } from '@web/config/ioc/inversify-config'
import { DeleteTagController } from '@web/controllers/tag/delete.controller'
import { ListTagsController } from '@web/controllers/tag/list.controller'
import { UpdateTagController } from '@web/controllers/tag/update.controller'
import { DeleteThoughtController } from '@web/controllers/thought/delete.controller'
import { ListThoughtsController } from '@web/controllers/thought/list.controller'
import { PostThoughtController } from '@web/controllers/thought/post.controller'
import { UpdateThoughtController } from '@web/controllers/thought/update.controller'
import { httpHandler } from '@web/helpers/http-handler'
import { authenticationMiddleware } from '@web/middleware/authentication.middleware'
import { validator } from '@web/middleware/validator.middleware'
import { DeleteTagSchema } from '@web/validators/schemas/tag/delete.validator'
import { UpdateTagSchema } from '@web/validators/schemas/tag/update.validator'
import { DeleteThoughtSchema } from '@web/validators/schemas/thought/delete.validator'
import { ListThoughtsSchema } from '@web/validators/schemas/thought/list.validator'
import { ThoughtPostSchema } from '@web/validators/schemas/thought/post.validator'
import { UpdateThoughtSchema } from '@web/validators/schemas/thought/update.validator'
import { Router } from 'express'

const api = Router().use(authenticationMiddleware)

/* ============================= THOUGHT =================================== */
api.post(
  '/thought',
  validator(ThoughtPostSchema),
  httpHandler(container.get(PostThoughtController))
)

api.get(
  '/thought',
  validator(ListThoughtsSchema),
  httpHandler(container.get(ListThoughtsController))
)

api.delete(
  '/thought/:thoughtId',
  validator(DeleteThoughtSchema),
  httpHandler(container.get(DeleteThoughtController))
)

api.put(
  '/thought/:thoughtId',
  validator(UpdateThoughtSchema),
  httpHandler(container.get(UpdateThoughtController))
)

/* ============================= TAG ===================================== */
api.get(
  '/tag',
  validator(ListThoughtsSchema),
  httpHandler(container.get(ListTagsController))
)

api.delete(
  '/tag/:tagId',
  validator(DeleteTagSchema),
  httpHandler(container.get(DeleteTagController))
)

api.put(
  '/tag/:tagId',
  validator(UpdateTagSchema),
  httpHandler(container.get(UpdateTagController))
)

export default api
