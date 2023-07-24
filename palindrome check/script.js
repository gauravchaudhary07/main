function checkPalindrome() {
    const numberInput = document.getElementById('numberInput').value;
    const resultElement = document.getElementById('result');
    
    // Remove any non-digit characters from the input
    const cleanedInput = numberInput.replace(/\D/g, '');
  
    // Check if the cleaned input is a palindrome
    const isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');
  
    if (isPalindrome) {
      resultElement.innerText = `Yes, ${numberInput} is a palindrome!`;
    } else {
      resultElement.innerText = `No, ${numberInput} is not a palindrome.`;
    }
  }
  
