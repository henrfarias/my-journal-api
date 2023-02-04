import { injectable } from 'inversify'
import bcrypt from 'bcrypt'
import { EncryptService } from './interfaces/encrypt'

@injectable()
export class BCryptEncryptService implements EncryptService {
  encode(txt: string): string {
    const ROUNDS = 6
    return bcrypt.hashSync(txt, ROUNDS)
  }
}
