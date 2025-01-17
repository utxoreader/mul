import { method, SmartContractLib } from 'scrypt-ts'

export class Mul extends SmartContractLib {
    constructor() {
        super(...arguments)
    }

    @method()
    static mul(a: bigint, b: bigint): bigint {
        return a * b
    }
}
