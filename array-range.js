const range = function (start ,end ,step) {
  let resArr = [];
  if(start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return resArr;
  }
  for ( let i = start ; i <= end ; i=i+step) {
    resArr.push(i)
  }
  return resArr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));