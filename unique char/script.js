function extractUniqueCharacters() {
    const textInput = document.getElementById('textInput').value;
    const resultElement = document.getElementById('result');
  
    // Extract unique characters using Set
    const uniqueCharacters = [...new Set(textInput)].join('');
  
    resultElement.innerText = `Unique characters: ${uniqueCharacters}`;
  }
  
