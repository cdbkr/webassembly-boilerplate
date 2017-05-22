import add from "./add.wast"; 

WebAssembly.instantiate(add)
.then(module => {
    let sum = module.instance.exports.add(1, 2);
        console.log("sum is", sum);
    });
