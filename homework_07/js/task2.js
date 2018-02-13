let game = confirm("Do you want to play a game?");
let maxNum=5,
attempt=3,
attemptUs=0,
prize=10,
totalPrize=0,
possiblePrize = 10;
let x=Math.floor(Math.random() * (maxNum + 1));
if (game){
    for (let i=0; i<attempt; i++){
    let myNumber= prompt( "Enter a number from 0 to "+maxNum+"\n"+
    "Attempts left: "+attempt+"\n"+"Total prize: "+totalPrize+" $"+ "\n"+
    "Possible prize on current attempt: "+possiblePrize+" $"+"\n");
    if (x===myNumber){