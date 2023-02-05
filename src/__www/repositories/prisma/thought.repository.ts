import {
  ListOptions,
  ThoughtRepository
} from '@business/repositories/thought.repository'
import { Thought } from '@domain/entity/thought'
import { PrismaClient, Tag } from '@prisma/client'
import { prismaClient } from '@web/config/setup-orm'
import { injectable } from 'inversify'

@injectable()
export class PrismaThoughtRepository implements ThoughtRepository {
  prisma: PrismaClient
  constructor() {
    this.prisma = prismaClient
  }

  async create(input: Thought): Promise<Thought> {
    return this.prisma.thought.create({ data: input })
  }

  async list(input: ListOptions): Promise<(Thought & { tag: Tag | null })[]> {
    return this.prisma.thought.findMany({
      where: {
        authorId: input.authorId,
        ...(input?.tagFilter && { tag: { id: input.tagFilter } })
      },
      include: { tag: true },
      skip: (input.page - 1) * input.limit,
      take: input.limit
    })
  }
}
