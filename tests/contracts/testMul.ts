import { method, assert, SmartContract } from 'scrypt-ts'
import { Mul } from '../mul'

export class TestMul extends SmartContract {
    @method()
    public unlock(a: bigint, b: bigint, c: bigint) {
        const c_ = Mul.mul(a, b)
        assert(c_ == c, 'result not equal a*b')
        assert(c_ <= 2147483647, 'result overflow')
    }
}
