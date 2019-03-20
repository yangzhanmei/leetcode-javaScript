/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function(dividend, divisor) {
    const maxValue = Math.pow(2, 31) - 1;
    let result = 0;

    let divisorTotal = Math.abs(divisor);
    if(Math.abs(divisor) === 1 && Math.abs(dividend === maxValue)) {
        result = maxValue;
    } else {
        if(Math.abs(divisor) <= Math.abs(dividend)/2) {
            while(true) {
                if(divisorTotal <= Math.abs(dividend)/2) {
                    divisorTotal += Math.abs(divisor);
                    result += 2;
                } else {
                    break;
                }
            }
            result += parseInt(parseInt(Math.abs(dividend)/2) % Math.abs(divisor) * 2 / Math.abs(divisor));
        }
        else {
            while(true) {
                if(divisorTotal <= Math.abs(dividend)) {
                    divisorTotal += Math.abs(divisor);
                    result += 1;
                } else {
                    break;
                }
            }
        }
    }
 
  return  (divisor > 0 && dividend >= 0) || (divisor < 0 && dividend < 0) ? Math.min(result,maxValue) : Math.min(-result,maxValue)
};