function largestNumber(nums) {
    const sortedNums = nums.map(num => num.toString())
      .sort((a, b) => (b + a).localeCompare(a + b));
  
    if (sortedNums[0] === '0') {
      return '0';
    }
  
    return sortedNums.join('');
  }
  
  
  const nums = [3, 30, 34, 5, 9];
  const result = largestNumber(nums);
  console.log(result);
  