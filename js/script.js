let number = +prompt("Put your number");
for(let i = 2; i < number; i++) {
  if(number % i === 0) {
   console.log("false");
   break;
  } else {
   console.log("true");
  }
}
