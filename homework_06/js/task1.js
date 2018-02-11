let a=parseFloat(prompt("enter the length of the side a:"));
let b=parseFloat(prompt("enter the length of the side b:"));
let c=parseFloat(prompt("enter the length of the side c:"));
const sTr=()=>{
  let p=((a+b+c)/2);
  let s=0;
  s=Math.sqrt(p*(p-a)*(p-b)*(p-c));
  if (s%1 !== 0) {
    s = s.toFixed(2);
  return s;
}
const typeT=()=>{
if ((c*c==a*a+b*b)||(a*a==c*c+b*b)||(b*b==a*a+c*c)){
  return "right triangle";
}else if((a===b)&&(b===c)&&(c===a)){
  return "equilateral triangle";
}else if((a===b)||(b===c)||(c===a)){
  return "isosceles triangle";
} else {
  return "scalene triangle";
}
}
if((a>=b+c)||(b>=a+c)||(c>=a+b)){
console.log ("Incorrect data");
}else{
console.log ("Type of triangle is "+ typeT()+ " and square is "+ sTr());
}