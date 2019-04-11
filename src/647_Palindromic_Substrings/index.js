/**
 * @param {string} s
 * @return {number}
 */

function getCountPiecewise(list,left,right) {
    let count = 0;
    while(left>=0 && right<list.length && list[left] === list[right]) {
        count++;
        left--;
        right++;
    }
    
    return count;
}

const countSubstrings = function(s) {
    let result = s.length;
    let sArr = s.split('');
    for(let i = 0; i < sArr.length-1; i++) {
        result += getCountPiecewise(sArr,i,i+1) + getCountPiecewise(sArr,i,i+2);
    }
    return result;
};
