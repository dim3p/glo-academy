// lesson02+

let num = 266219;
num = String(num).split('');
let res = 1;
for (i in num) { res = res * Number(num[i]); }
res = res ** 3;
console.log(String(res).substring(0, 2));