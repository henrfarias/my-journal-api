import { Container } from 'inversify'
import { entityModule } from './entity.module'
import { serviceModule } from './service.module'
import { usecaseModule } from './usecase.module'

const container = new Container()

container.load(entityModule)
container.load(serviceModule)
container.load(usecaseModule)

export { container }
