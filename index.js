function tribonacci(sn,n){
if(n === 2 || n === 0) {
  return []
}else if(n === 1){
  return [1]
}
let a = sn[0]
let b = sn[1]
let c = sn[2]
let res =  [a,b,c]
  for(let i=4; i<=n; i++){
    sum = a+b+c;
    a = b;
    b = c;
    c = sum;
    res.push(sum)
  }
  return res
}

console.log(tribonacci(5));
