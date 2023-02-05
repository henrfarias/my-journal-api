import { InputTagListDTO } from '@business/usecases/interfaces/dto/tag/list.dto'
import { Payload } from '@domain/service/interfaces/token.service'
import Joi from 'joi'

export const ListTagsSchema = Joi.object<InputTagListDTO>({
  user: Joi.object<Payload>({
    id: Joi.string().required(),
    nickname: Joi.string().required()
  })
})
