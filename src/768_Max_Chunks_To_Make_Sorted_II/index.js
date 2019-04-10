/**
 * @param {number[]} arr
 * @return {number}
 */
const maxChunksToSorted = function(arr) {
    let result = 0;
    const [...defaultArr] = arr;
    arr.sort((a,b)=>a-b);

    let sortedNum = 0;
    let defaultNum = 0;
    for(let i = 0; i < arr.length; i++) {
        sortedNum += arr[i];
        defaultNum += defaultArr[i];
        if(sortedNum === defaultNum) {
            result++;
        }
    }
    
    return result;
};