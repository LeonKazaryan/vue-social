const obj = {
    a: 1,
    b: 4,
    c: 5,
    d: 16
}





const func = (obj) =>{
    let sum = Object.values(obj).reduce((a, b) => a + b);
    return sum
}

console.log(func(obj))