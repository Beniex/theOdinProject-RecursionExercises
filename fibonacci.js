
function fibonacci(n){
    if(n===1){
        return [0]; 
    }
    if(n===2){
        return [0, 1]; 
    }
    if(n>2){
        let fibLastNumber = fibonacci(n-1)[fibonacci(n-1).length -1] + fibonacci(n-1)[fibonacci(n-1).length -2]; 
        let fibSeries = fibonacci(n-1);
        fibSeries.push(fibLastNumber); 
        return fibSeries;
    }

}

console.log(fibonacci(8)); 

