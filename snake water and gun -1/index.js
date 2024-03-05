let run = true;
while(run){
const myArray = ['s','w','g'];  
const randomElement = myArray[Math.floor(Math.random() * myArray.length)];

let game =prompt("enter 's' as snake, 'w' as water or 'g' as gun")

if(( game === 's' && 'w' === randomElement) ||('w' === game && 'g' === randomElement) || ('g' === game && 's' === randomElement) ){
  alert("user is the winner")
}
else if(('s' === randomElement && 'w' === game) ||('w' === randomElement && 'g' === game) || ('g' === randomElement && 's' === game) ) {
  alert("computer is winner")
}
else {
  alert("game is draw")
}
  run = confirm("do you want to play again")
}