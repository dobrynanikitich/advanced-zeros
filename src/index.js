module.exports = function getZerosCount(number, base) {
  let count = 0;
  let n = 1;
  let arr = [];
  
  if(base > 0 && base !== 1){
    for(let i = 2; i <= base; i++){
      while(base % i === 0 && base > 1){
        arr.push(i);
        base = base / i;
      }

      if(base / i == 1){
        arr.push(base);
      }
    }

  } else if(base === 1){
    arr.push(1);
  }

  arr = arr.filter(function(item){
    return item === arr[arr.length - 1];
  });
console.log(arr);
  let primeNumber = arr[arr.length - 1];

  while(Math.pow(primeNumber, n) <= number) {
    count += Math.floor((number / (Math.pow(primeNumber, n))));
    n++;
  }
console.log(count);
  return Math.floor(count / arr.length);
}