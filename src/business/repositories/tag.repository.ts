import { Tag } from '@domain/entity/tag'

export const TagRepositoryToken = Symbol.for('TagRepository')

export type FindByOptions = keyof Pick<Tag, 'name' | 'hexColor' | 'id'>

export type ListResponse = Array<Omit<Tag, 'authorId'>>

export type DataToUpdate = Partial<Pick<Tag, 'hexColor' | 'name'>>
export interface TagRepository {
  create(input: Tag): Promise<Tag>
  findBy(by: FindByOptions, value: string): Promise<Tag | null>
  list(authorId: string): Promise<ListResponse>
  update(tagId: string, data: DataToUpdate): Promise<Tag>
  delete(tagId: string): Promise<{ id: string }>
}
