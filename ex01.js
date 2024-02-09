function max(x, y){
    if(x > y){
        return x;
    }else{
        return y;
    }
}
console.log(max(10, 2))

// SIMPLIFICANDO:
function max(x, y){
    if(x > y){
        return x;
    }
        return y;
}
console.log(max(10, 2))

// SIMPLIFICANDO:
function max(x, y){{
    if(x > y) return x;
    return y;
}}

// SIMPLIFICANDO:
function max(x, y){{
    return x > y ? x : y;
}}


// SIMPLIFICANDO:
const max = (x , y) => x > y ? x : y;
console.log(max(10, 20))