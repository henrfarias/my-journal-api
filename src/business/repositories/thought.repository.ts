import { Thought } from "@domain/entity/thought"

export const ThoughtRepositoryToken = Symbol.for('ThoughtRepository')

export interface ThoughtRepository {
  create(input: Thought): Promise<Thought> 
}