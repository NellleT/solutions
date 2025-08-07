// Codewars: Help the bookseller !
// 6 kyu: https://www.codewars.com/kata/54dc6f5a224c26032800005c

function stockList(books, categories) {
  
  if (books.length === 0) {
    return '';
  }
  
  let totals = {};
  categories.forEach(letter => totals[letter] = 0);
  
  for (let i = 0; books.length > i; i++) {
    
    let spl = books[i].split(" ");
    let letter = spl[0][0];
    let quantity = parseInt(spl[1]);
    
    if (letter in totals) {
      totals[letter] += quantity;
    }
  }
  
  return categories.map(cat => `(${cat} : ${totals[cat]})`).join(" - ");
}