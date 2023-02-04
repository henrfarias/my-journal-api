import 'reflect-metadata'
import { container } from '@web/config/ioc/inversify-config'
import { EncryptService, EncryptServiceToken } from '@domain/service/interfaces/encrypt'
import { compareSync } from 'bcrypt'

describe('Encrypt service', () => {
  describe('encode', () => {
    test('should return another string realy bigger than the passed', () => {
      const service = container.get<EncryptService>(EncryptServiceToken)
      const result = service.encode('password')
      expect(result).not.toEqual('password')
      expect(compareSync('password', result)).toBeTruthy()
    })
  })
})
