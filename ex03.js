function fizzBuzz(n){
    if(typeof n !== 'number') return n;
    if(n % 3 === 0 && n % 5 === 0) return 'FizzBuzz'
    if(n % 3 === 0) return 'Fizz'
    if(n % 5 === 0) return 'Buzz'
    return n;
}
