/**
 * @param {number[]} A
 * @return {number[]}
 */
const pancakeSort = function (A) {
    if (A.length <= 1) {
        return A;
    }
    const result = [];
    let end = A.length - 1;
    while (end > 0) {
        // 获取end前的最大值index
        const maxIndex = A.indexOf(Math.max(...A.slice(0, end+1)));
        if (maxIndex !== end) {
            swap(A,0,maxIndex);
            result.push(maxIndex+1);
            swap(A,0,end);
            result.push(end+1);
        }
        end--;
    }
    return result;
};

function swap(list,start,end) {
    while(start < end) {
        const temp = list[start];
        list[start] = list[end];
        list[end] = temp;
        start++;
        end--;
    }
}