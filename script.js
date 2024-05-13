//1
function checkYear() {
    var year = document.querySelector('.year').value;
    if (year % 2 == 1) {
      document.querySelector('.result').textContent = year + ' is odd.';
    } else {
      document.querySelector('.result').textContent = year + ' is not odd.';
    }
  }

  //3
function checkPasswordStrength(password) {
    
    if (password.length < 3) {
      return "uvargisia";
    } else if (password.length <= 6) {
      
      if (/^[0-9]+$/.test(password)) {
        return "shecdoma";
      } else {
        return "sustia";
      }
    } else if (password.length <= 16) {
     
      if (/^[0-9]+$/.test(password)) {
        return "shecdoma";
      } else {
        return "misagebia";
      }
    } else {
      
      if (/^[0-9]+$/.test(password)) {
        return "shecdoma";
      } else {
        return "zlieria";
      }
    }
  }

  function checkPassword() {
    let password = document.querySelector(".password").value;
    let result = checkPasswordStrength(password);
    let resultElement = document.querySelector(".result1");
    resultElement.textContent = "Strength: " + result;
  }

  //4
  function findLongestWord(str) {
    const words = str.split(' ');
  
    let longestWord = '';
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        longestWord = words[i];
        maxLength = words[i].length;
      }
    }
  
    return longestWord;
  }
  

  console.log(findLongestWord("aq aris yvelaze grzeli sityva"));