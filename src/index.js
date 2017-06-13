import add from './add.wat';
import fact from './fact.wat';
import now from 'performance-now';
import debug from 'debug';

const infoWasm = debug('WASM');
const infoNative = debug('Native');

WebAssembly.instantiate(fact)
.then(module => {
        infoWasm(`Starting WASM execution`);
        const startWasm = now();
        let factorial = module.instance.exports.fact(10);
        infoWasm(`WASM execution finished in: ${(now() - startWasm).toFixed(10)}ms with factorial ${factorial}`);
    });


const factorial = (n) => {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
};
infoNative(`Starting Native execution`);
const startNative = now();
const nativeFactorial = factorial(10);
infoNative(`Native execution finished in: ${(now() - startNative).toFixed(10)}ms with factorial ${nativeFactorial}`);

