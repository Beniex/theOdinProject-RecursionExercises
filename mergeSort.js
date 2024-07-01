function min (a, b){
    if(a<b){
        return a; 
    } else if(a>b){
        return b; 
    } else if(a==b){
        return a; 
    } else if(a==undefined && b !== undefined){
        return b;
    } else if(b==undefined && a !== undefined){
        return a;
    }
}
function mergeSort(array){
    var mergedArray =[];
    if(array.length ==1){
        return array; 
    } 
    else if(array.length > 1){

    let middleOfArray = Math.floor(array.length/2); 
    let subArrayLeft = array.slice(0, middleOfArray);
    let subArrayRight = array.slice(middleOfArray, array.length); 
    let subArrayLeftSorted = mergeSort(subArrayLeft); 
    let subArrayRightSorted = mergeSort(subArrayRight); 

        while (subArrayLeftSorted.length > 0 || subArrayRightSorted.length > 0){ 
            let subArrayRightSortedFirstNum = subArrayRightSorted[0];
            let subArrayLeftSortedFirstNum = subArrayLeftSorted[0]; 
            if(min(subArrayLeftSortedFirstNum, subArrayRightSortedFirstNum)===subArrayLeftSortedFirstNum){
                mergedArray.push(subArrayLeftSorted.shift());

            } else if(min(subArrayLeftSortedFirstNum, subArrayRightSortedFirstNum)===subArrayRightSortedFirstNum){
                mergedArray.push(subArrayRightSorted.shift()); 

            }


        }

    }
    return mergedArray; 
}

console.log(mergeSort([0, 1, 2, 3, 4, 5 , 6, 7])); 