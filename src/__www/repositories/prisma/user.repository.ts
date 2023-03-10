import {
  FindByOptions,
  UserRepository
} from '@business/repositories/user.repository'
import { InputRegisterDTO } from '@business/usecases/interfaces/dto/user/register.dto'
import { UserEntity } from '@domain/entity/user'
import { PrismaClient } from '@prisma/client'
import { prismaClient } from '@web/config/setup-orm'
import { injectable } from 'inversify'

@injectable()
export class PrismaUserRepository implements UserRepository {
  prisma: PrismaClient
  constructor() {
    this.prisma = prismaClient
  }

  async register(input: InputRegisterDTO): Promise<UserEntity> {
    return this.prisma.user.create({ data: input })
  }

  async IsAlreadyExists(nickname: string): Promise<boolean> {
    const user = await this.prisma.user.findFirst({ where: { nickname } })
    return !!user
  }

  findBy(by: FindByOptions, value: string): Promise<UserEntity | null> {
    return this.prisma.user.findFirst({ where: { [by]: value } })
  }
}
