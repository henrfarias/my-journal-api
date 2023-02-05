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

  async findBy(thoughtId: string, authorId: string): Promise<Thought | null> {
    return this.prisma.thought.findFirst({
      where: {
        AND: [{ id: thoughtId }, { authorId }]
      }
    })
  }

  async delete(thoughtId: string): Promise<{ id: string }> {
    return this.prisma.thought.delete({
      where: { id: thoughtId },
      select: { id: true }
    })
  }

  update(
    thoughtId: string,
    data: Partial<Pick<Thought, 'body' | 'attachments' | 'tagId'>>
  ): Promise<Thought> {
    return this.prisma.thought.update({ where: { id: thoughtId }, data })
  }
}
