import { InputPostDTO } from '@business/usecases/interfaces/dto/thought/post.dto'
import { Payload } from '@domain/service/interfaces/token.service'
import Joi from 'joi'

export const ThoughtPostSchema = Joi.object<InputPostDTO>({
  body: Joi.string().required(),
  user: Joi.object<Payload>({
    id: Joi.string().required(),
    nickname: Joi.string().required()
  }),
  tag: Joi.string().allow(null),
  tagColor: Joi.string().when('tag', {
    then: Joi.required()
  }),
  attachments: Joi.string().allow(null)
})
