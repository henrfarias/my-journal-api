import { InputDeleteTagDTO } from "@business/usecases/interfaces/dto/tag/delete.dto";
import { Payload } from "@domain/service/interfaces/token.service";
import Joi from "joi";

export const DeleteTagSchema = Joi.object<InputDeleteTagDTO>({
  tagId: Joi.string().required(),
  user: Joi.object<Payload>({
    id: Joi.string().required(),
    nickname: Joi.string().required()
  }),
})