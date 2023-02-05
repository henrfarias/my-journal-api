import { Tag } from '@domain/entity/tag'

export const TagRepositoryToken = Symbol.for('TagRepository')

export type FindByOptions = keyof Pick<Tag, 'name' | 'hexColor'>

export interface TagRepository {
  create(input: Tag): Promise<Tag>
  findBy(by: FindByOptions, value: string): Promise<Tag | null>
}
