import { InputUpdateThoughtDTO } from '@business/usecases/interfaces/dto/thought/update.dto'
import { Thought } from '@domain/entity/thought'
import { Payload } from '@domain/service/interfaces/token.service'
import Joi from 'joi'

export const UpdateThoughtSchema = Joi.object<InputUpdateThoughtDTO>({
  data: Joi.object<Partial<Pick<Thought, 'body' | 'tagId'>>>({
    body: Joi.string(),
    tagId: Joi.string()
  })
    .required()
    .min(1),
  newTag: Joi.string(),
  tagColor: Joi.string().when('newTag', { then: Joi.required() }),
  newAttachments: Joi.array(),
  thoughtId: Joi.string().required(),
  user: Joi.object<Payload>({
    id: Joi.string().required(),
    nickname: Joi.string().required()
  })
})
