function analyzeArray(arr) {
  let total = 0;
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
    total += arr[i];
  }
  return {
    average: total / arr.length,
    min: min,
    max: max,
    length: arr.length,
  };
}

export default analyzeArray;
