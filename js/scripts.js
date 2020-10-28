function findPrimes(number) {
  let numArr = [];
  for (let i = 2; i <= number; i++) {
    numArr.push(i);
  }

  let primeArray = [];

  for (let i = 0; i <= number; i++) {
    if (numArr[i] % 2  && numArr[i] % 3 && numArr[i] % 5 && numArr[i] % 7) {          
      primeArray.push(numArr[i])                                                                  
    } else if (numArr[i] === 2 || numArr[i] === 3 || numArr[i] === 5 || numArr[i] === 7) {
      primeArray.push(numArr[i]);              
    }  
  }
  return primeArray;
}

$(document).ready(function() {
    $("#number").submit((e) => {
        e.preventDefault();

        let originalNumber = parseInt($("#number-input").val());
  
        if (originalNumber <= 2) {
            alert("Your number is too small!");
        } else {
          let primeNumbers = findPrimes(originalNumber);
          primeNumbers.forEach(function(number) {
            $("#output").append("<li>" + number + "</li>");
          });
        }
    });
});