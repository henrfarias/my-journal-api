import { Container } from 'inversify'
import { controllerModule } from './controller.module'
import { entityModule } from './entity.module'
import { repositoryModule } from './repository.module'
import { serviceModule } from './service.module'
import { usecaseModule } from './usecase.module'

const container = new Container()

container.load(entityModule)
container.load(serviceModule)
container.load(usecaseModule)
container.load(controllerModule)
container.load(repositoryModule)

export { container }
