import { container } from '@web/config/ioc/inversify-config'
import { PostThoughtController } from '@web/controllers/thought/post.controller'
import { httpHandler } from '@web/helpers/http-handler'
import { authenticationMiddleware } from '@web/middleware/authentication.middleware'
import { validator } from '@web/middleware/validator.middleware'
import { ThoughtPostSchema } from '@web/validators/schemas/thought/post.validator'
import { Router } from 'express'

const api = Router().use(authenticationMiddleware)

api.get('/', (_req, res) => {
  res.json({ message: 'ho' })
})

api.post(
  '/thought',
  validator(ThoughtPostSchema),
  httpHandler(container.get(PostThoughtController))
)

export default api
