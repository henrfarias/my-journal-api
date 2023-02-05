import { TagRepository, FindByOptions } from '@business/repositories/tag.repository'
import { Tag } from '@domain/entity/tag'
import { PrismaClient } from '@prisma/client'
import { prismaClient } from '@web/config/setup-orm'
import { injectable } from 'inversify'

@injectable()
export class PrismaTagRepository implements TagRepository {
  prisma: PrismaClient
  constructor() {
    this.prisma = prismaClient
  }

  async create(input: Tag): Promise<Tag> {
    return this.prisma.tag.create({ data: input })
  }

  async findBy(by: FindByOptions, value: string): Promise<Tag | null> {
    return this.prisma.tag.findFirst({ where: { [by]: value } })
  }
}
