// Codewars: Simple Encryption #1 - Alternating Split
// 6 kyu: https://www.codewars.com/kata/57814d79a56c88e3e0000786

function encrypt(text, n) {
    if (!text || n <= 0) return text;
    
    for (let i = 0; i < n; i++) {
      let odd = [], even = [];
      for (let j = 0; j < text.length; j++) {
        if (j % 2 === 0) even.push(text[j]);
        else odd.push(text[j]);
      }
      text = odd.concat(even).join('');
    }
    
    return text;
  }
  
  function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) return encryptedText;
    
    for (let i = 0; i < n; i++) {
      let mid = Math.floor(encryptedText.length / 2);
      let odd = encryptedText.slice(0, mid);
      let even = encryptedText.slice(mid);
      let decrypted = '';
      
      for (let j = 0; j < even.length; j++) {
        decrypted += even[j] + (odd[j] || '');
      }
      encryptedText = decrypted;
    }
    
    return encryptedText;
  }