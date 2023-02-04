import { container } from '@web/config/ioc/inversify-config'
import { LoginController } from '@web/controllers/user/login.controller'
import { RegisterUserController } from '@web/controllers/user/register.controller'
import { httpHandler } from '@web/helpers/http-handler'
import { validator } from '@web/middleware/validator.middleware'
import { loginSchema } from '@web/validators/schemas/user/login.validator'
import { registerUserSchema } from '@web/validators/schemas/user/register.validator'
import { Router } from 'express'

const api = Router()

api.post(
  '/register',
  validator(registerUserSchema),
  httpHandler(container.get(RegisterUserController))
)

api.post(
  '/login',
  validator(loginSchema),
  httpHandler(container.get(LoginController))
)

export default api
