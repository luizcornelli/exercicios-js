let a = 3

global.b = 123
this.d = 2222
this.u = 9999
this.c = 456


console.log(a)
console.log(global.c)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

abc = 3 // não faça isso 
console.log(global.abc)