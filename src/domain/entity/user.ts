import { inject, injectable } from 'inversify'
import {
  EncryptService,
  EncryptServiceToken
} from '../service/interfaces/encrypt'

export interface UserEntity {
  name: string
  nickname: string
  password: string
  birthDate: Date | null
  gender: `${Gender}` | null
}

export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  NOT_QUALIFIED = 'NOT_QUALIFIED'
}

@injectable()
export class User {
  public data: UserEntity | null
  private defaultError = new Error

  constructor(
    @inject(EncryptServiceToken) private encryptService: EncryptService
  ) {
    this.data = null
    this.defaultError = new Error('There is no user setted')
  }
  public set(user: UserEntity): void {
    this.data = user
  }

  public get(): UserEntity {
    if (this.data === null) throw this.defaultError
    return this.data
  }

  public encodePassword(): void {
    if (this.data === null) throw this.defaultError
    this.data.password = this.encryptService.encode(this.data.password)
  }
}
