import { InputLoginDTO } from '@business/usecases/interfaces/dto/user/login.dto'
import Joi from 'joi'

export const loginSchema = Joi.object<InputLoginDTO>({
  nickname: Joi.string().required(),
  password: Joi.string().required()
})
