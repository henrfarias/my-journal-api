import { InputDeleteThoughtDTO } from '@business/usecases/interfaces/dto/thought/delete.dto'
import { Payload } from '@domain/service/interfaces/token.service'
import Joi from 'joi'

export const DeleteThoughtSchema = Joi.object<InputDeleteThoughtDTO>({
  user: Joi.object<Payload>({
    id: Joi.string().required(),
    nickname: Joi.string().required()
  }),
  thoughtId: Joi.string().required()
})
