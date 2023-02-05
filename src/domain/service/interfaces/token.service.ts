export const TokenServiceToken = Symbol.for('TokenService')

export interface Payload {
  id: string
  nickname: string
}
export interface TokenService {
  sign(payload: Payload): string
  verify(token: string): Payload | null
}
