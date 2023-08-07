const add = function(nums1, nums2) {
  return nums1 + nums2;
	
};

const subtract = function(nums1, nums2) {
  return nums1 - nums2;
};

const sum = function(numsList) {
  const finAnswer = numsList.reduce((ans, arrayElement) => {
    ans += arrayElement;
    return ans;
  }, 0);
  
  return finAnswer;
};

const multiply = function(nums1) {
  let nums = 1;

  nums1.forEach((numsElement) => {
    nums = nums * numsElement;
  });

  return nums;
};

const power = function(nums1, nums2) {
  if (nums2 === 0)
  {
    return 1;
  }
  
  let sum = nums1;
  for (let i = 0; i < nums2 - 1; ++i)
  {
    sum = sum * nums1;
  }

  return sum;
};

const factorial = function(nums1) {
  if (nums1 === 0)
  {
    return 1;
  }
  
  let sum = nums1;
  for (let i = nums1 - 1; i > 0; --i)
  {
    sum = sum * i;
  }
  
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
