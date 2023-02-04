export interface Usecase<Input, Output> {
  exec(input: Input): Promise<Output>
}