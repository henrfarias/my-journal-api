export const EncryptServiceToken = Symbol.for('EncryptService')

export interface EncryptService {
  encode(txt: string): string
}