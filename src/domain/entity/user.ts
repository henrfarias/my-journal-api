import { inject, injectable } from 'inversify'
import {
  EncryptService,
  EncryptServiceToken
} from '../service/interfaces/encrypt'

export interface UserEntity {
  name: string
  nickname: string
  password: string
  birth_date?: Date
  gender?: Gender
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  NOT_QUALIFIED = 'NOT_QUALIFIED'
}

@injectable()
export class User {
  constructor(
    @inject(EncryptServiceToken) private encryptService: EncryptService
  ) {}
  private encode(txt: string): string {
    return this.encryptService.encode(txt)
  }
}
