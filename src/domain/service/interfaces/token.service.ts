export const TokenServiceToken = Symbol.for('TokenService')

export interface TokenService {
  sign(payload: { nickname: string; id: string }): string
}
