import {
  TokenService,
  TokenServiceToken
} from '@domain/service/interfaces/token.service'
import { inject, injectable } from 'inversify'
import {
  EncryptService,
  EncryptServiceToken
} from '../service/interfaces/encrypt.service'

export interface UserEntity {
  id?: string
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
  private defaultError = new Error()

  constructor(
    @inject(EncryptServiceToken) private encryptService: EncryptService,
    @inject(TokenServiceToken) private tokenService: TokenService
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

  public comparePassword(password: string): boolean {
    if (this.data === null) throw this.defaultError
    return this.encryptService.compare(this.data.password, password)
  }

  public generateToken(): string {
    if (this.data === null) throw this.defaultError
    if (!this.data.id) throw new Error('User without id')
    return this.tokenService.sign({
      id: this.data.id,
      nickname: this.data.nickname
    })
  }
}
