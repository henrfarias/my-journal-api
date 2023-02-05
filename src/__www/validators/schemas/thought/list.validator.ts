import { InputListThoughtsDTO } from "@business/usecases/interfaces/dto/thought/list.dto";
import { Payload } from "@domain/service/interfaces/token.service";
import Joi from "joi";

export const ListThoughtsSchema = Joi.object<InputListThoughtsDTO>({
  limit: Joi.number().positive(),
  page: Joi.number().positive(),
  tagId: Joi.string(),
  user: Joi.object<Payload>({
    id: Joi.string().required(),
    nickname: Joi.string().required()
  })
})