import {
  TagRepository,
  FindByOptions,
  ListResponse
} from '@business/repositories/tag.repository'
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

  async list(authorId: string): Promise<ListResponse> {
    return this.prisma.tag.findMany({
      where: { authorId },
      select: {
        id: true,
        name: true,
        hexColor: true,
        createdAt: true,
        updatedAt: true
      }
    })
  }

  async update(
    tagId: string,
    data: Partial<Pick<Tag, 'name' | 'hexColor'>>
  ): Promise<Tag> {
    return this.prisma.tag.update({ where: { id: tagId }, data })
  }

  async delete(tagId: string): Promise<{ id: string }> {
    return this.prisma.tag.delete({ where: { id: tagId } })
  }
}
