import { OutputListThoughtsDTO } from '@business/usecases/interfaces/dto/thought/list.dto'
import { Thought } from '@domain/entity/thought'
import { Tag } from '@prisma/client'

export const ThoughtRepositoryToken = Symbol.for('ThoughtRepository')

export interface ListOptions {
  authorId: string
  page: number
  limit: number
  tagFilter?: string
}

export interface ThoughtRepository {
  create(input: Thought): Promise<Thought>
  list(input: ListOptions): Promise<Array<Thought & { tag: Tag | null }>>
  delete(thoughtId: string): Promise<{ id: string }>
  findBy(thoughtId: string, authorId: string): Promise<Thought | null>
}
