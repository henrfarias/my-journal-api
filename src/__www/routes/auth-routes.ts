import { container } from '@web/config/ioc/inversify-config'
import { DeleteThoughtController } from '@web/controllers/thought/delete.controller'
import { ListThoughtsController } from '@web/controllers/thought/list.controller'
import { PostThoughtController } from '@web/controllers/thought/post.controller'
import { httpHandler } from '@web/helpers/http-handler'
import { authenticationMiddleware } from '@web/middleware/authentication.middleware'
import { validator } from '@web/middleware/validator.middleware'
import { DeleteThoughtSchema } from '@web/validators/schemas/thought/delete.validator'
import { ListThoughtsSchema } from '@web/validators/schemas/thought/list.validator'
import { ThoughtPostSchema } from '@web/validators/schemas/thought/post.validator'
import { Router } from 'express'

const api = Router().use(authenticationMiddleware)

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

export default api
