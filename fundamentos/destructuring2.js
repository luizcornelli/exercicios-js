const [ a ] = [10]

console.log(a)

const [ n1, n2, n3, , n4, n5, n6=0 ] = [1,2,3,4];
console.log(n1, n2, n3, n4, n5, n6)

const [, [, n]] = [[1], [, 3]]

console.log(n)