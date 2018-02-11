let dlr=parseFloat(prompt("enter USD:"));
let evr=parseFloat(prompt("enter EURO:"));
let kursE=33.2324;
let kursD=27.1240;
let equalDoll; 
let equalEuro; 
let evEqdlr;
if ((dlr<=0)||(evr<=0)||isNaN(dlr)||isNaN(evr)){
  console.log("Incorrect data");
}else {
  equalDoll=kursD*dlr;
  equalEuro=kursE*evr;
  evEqdlr=kursE/kursD;
  console.log( evr+" euros are equal "+equalEuro.toFixed(2)+" UAH, "+dlr+" dollars are equal "+equalDoll.toFixed(2)+" UAH, one euro is equal "+evEqdlr.toFixed(2)+" dollars.");
}