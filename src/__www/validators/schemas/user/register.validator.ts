import { InputRegisterDTO } from '@business/usecases/interfaces/dto/user/register.dto'
import { Gender } from '@domain/entity/user'
import Joi from 'joi'

export const registerUserSchema = Joi.object<InputRegisterDTO>({
  name: Joi.string().required(),
  nickname: Joi.string().required(),
  password: Joi.string().required(),
  birthDate: Joi.date().allow(null),
  gender: Joi.valid(...Object.values(Gender), null)
})
