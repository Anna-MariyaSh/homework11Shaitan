const number = +prompt("Put your number");
if(isNaN(number)) {
  alert("incorrect value");
} else {
  for(let i = 2; i < number; i++) {
    if(number % i === 0) {
     console.log("false");
     braek;
    }
  }
   console.log("true");
}
