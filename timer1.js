const ourArr = process.argv.slice(2);
//process.stdout.write('\x07');

for(let arr of ourArr) {
  if(arr > 0){
  let delay = Number(arr) * 1000;
  console.log(arr);
    setTimeout(() => {
      console.log(delay);
      process.stdout.write('\x07');
    }, delay);
  }
}