import add from './add.wat';
import fact from './fact.wat';
import now from 'performance-now';

WebAssembly.instantiate(fact)
.then(module => {
    console.log(`Starting WASM execution`);
    const startWasm = now();
    let factorial = module.instance.exports.fact(10);
    console.log(`WASM execution finished in: ${(now() - startWasm).toFixed(10)}ms with factorial ${factorial}`);
    });


let factorial = function (n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
};
console.log(`Starting Native execution`);
const startNative = now();
const nativeFactorial = factorial(10);
console.log(`Native execution finished in: ${(now() - startNative).toFixed(10)}ms with factorial ${nativeFactorial}`);

