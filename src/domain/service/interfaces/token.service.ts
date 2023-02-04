export interface TokenService {
  sign(payload: { nickname: string; id: string }): string
}
