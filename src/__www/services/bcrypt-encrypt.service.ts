import { injectable } from 'inversify'
import bcrypt from 'bcrypt'
import { EncryptService } from '../../domain/service/interfaces/encrypt.service'

@injectable()
export class BCryptEncryptService implements EncryptService {
  encode(txt: string): string {
    const ROUNDS = 6
    return bcrypt.hashSync(txt, ROUNDS)
  }

  compare(hash: string, compareTo: string): boolean {
    return bcrypt.compareSync(compareTo, hash)
  }
}
