import { ThoughtRepository } from '@business/repositories/thought.repository'
import { Thought } from '@domain/entity/thought'
import { PrismaClient } from '@prisma/client'
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
}
