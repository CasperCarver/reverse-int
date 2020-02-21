module.exports = function reverse (n) {
    if (n<0){
        n*=-1;
    }
    return (n.toString().split('').reverse().join(''));
}


// let n=-123;
// console.log(Number(n.toString().split('').reverse().join('')));