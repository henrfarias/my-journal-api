import { InputUpdateTagDTO } from '@business/usecases/interfaces/dto/tag/update.dto'
import { Tag } from '@domain/entity/tag'
import { Payload } from '@domain/service/interfaces/token.service'
import Joi from 'joi'

export const UpdateTagSchema = Joi.object<InputUpdateTagDTO>({
  data: Joi.object<Partial<Pick<Tag, 'name' | 'hexColor'>>>({
    name: Joi.string(),
    hexColor: Joi.string()
  })
    .required()
    .min(1),
  tagId: Joi.string().required(),
  user: Joi.object<Payload>({
    id: Joi.string().required(),
    nickname: Joi.string().required()
  })
})
