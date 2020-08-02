function add(num1, num2){
    const arg = [...arguments]

    var count = 0;
    for(let i = 2; i < arg.length; i++ ){
        const elements = arg[i];
        count = count+ elements;
    }
    return num1  + num2 + count;
}
const result = add(2, 3, 5, 4, 1, 5, 50, 30);
console.log(result);