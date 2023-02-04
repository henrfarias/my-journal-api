import { container } from '@web/config/ioc/inversify-config'
import { RegisterUserController } from '@web/controllers/user/registerController'
import { httpHandler } from '@web/helpers/httpHandler'
import { validator } from '@web/middleware/validator.middleware'
import { registerUserSchema } from '@web/validators/schemas/user/register.validator'
import { Router } from 'express'

const api = Router()

api.get('/', (_req, res) => {
  res.json({ message: 'hey' })
})

api.post(
  '/register',
  validator(registerUserSchema),
  httpHandler(container.get(RegisterUserController))
)

export default api
