/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
const getShipCount = function (weights, capacity) {
  let currentCapacity = 0;
  let shipCount = 1;
  for (let i = 0; i < weights.length; i++) {
    currentCapacity += weights[i];
    if (currentCapacity > capacity) {
      ++shipCount;
      currentCapacity = weights[i];
    }
  }

  return shipCount;
}

const shipWithinDays = function (weights, D) {
  if (D < 1 || weights.length > 50000 || weights.length < D || weights.find(item => item < 1 || item > 500)) {
    return;
  }

  const weightsTotal = weights.reduce((pre, next) => pre + next);
  const maxItemInWeights = Math.max(...weights);
  let capacity = Math.max(maxItemInWeights, Math.ceil(weightsTotal / D));

  while (true) {
    if (getShipCount(weights, capacity) <= D) {
      break;
    }
    ++capacity;
  }

  return capacity;
};