let ourArr = process.argv.slice(2);
//process.stdout.write('\x07');

// for(let arr of ourArr) {
//   if(arr > 0){
//   let delay = Number(arr) * 1000;
//   console.log(arr);
//     setTimeout(() => {
//       console.log(delay);
//       process.stdout.write('\x07');
//     }, delay);
//   }
// }


// separate logic 

ourArr = ourArr.map(Number);

let alarms = ourArr.map((arr) => arr * 1000);

const beep = () =>  process.stdout.write('\x07');

const beeper= (delay) => {
  if(!isNaN(delay) && delay >=0){
    setTimeout(beep,delay);
  }
}

for(let alarm of alarms ) {
    beeper(alarm);
}