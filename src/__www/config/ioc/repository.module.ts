import { UserRepositoryToken } from '@business/repositories/user.repository'
import { PrismaUserRepository } from '@web/repositories/prisma/user.repository'
import { ContainerModule, interfaces } from 'inversify'

export const repositoryModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(UserRepositoryToken).to(PrismaUserRepository)
})
