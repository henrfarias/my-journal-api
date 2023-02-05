import { TagRepositoryToken } from '@business/repositories/tag.repository'
import { ThoughtRepositoryToken } from '@business/repositories/thought.repository'
import { UserRepositoryToken } from '@business/repositories/user.repository'
import { PrismaTagRepository } from '@web/repositories/prisma/tag.repository'
import { PrismaThoughtRepository } from '@web/repositories/prisma/thought.repository'
import { PrismaUserRepository } from '@web/repositories/prisma/user.repository'
import { ContainerModule, interfaces } from 'inversify'

export const repositoryModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(UserRepositoryToken).to(PrismaUserRepository)
  bind(ThoughtRepositoryToken).to(PrismaThoughtRepository)
  bind(TagRepositoryToken).to(PrismaTagRepository)
})
