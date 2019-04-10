/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function(nums) {
    const sortedNums = nums.sort((a,b)=>a-b);
    let result = 0;
    for(let i = 0; i < sortedNums.length; i++) {
        if(i%2 === 0) {
           result += sortedNums[i];  
        }
    }
    
    return result;
};