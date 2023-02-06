import { InputGetUserDTO } from '@business/usecases/interfaces/dto/user/get.dto'
import { Payload } from '@domain/service/interfaces/token.service'
import Joi from 'joi'

export const GetUserSchema = Joi.object<InputGetUserDTO>({
  user: Joi.object<Payload>({
    id: Joi.string().required(),
    nickname: Joi.string().required()
  })
})
