// Codewars: Title Case
// 6 kyu: https://www.codewars.com/kata/5202ef17a402dd033c000009

function titleCase(title, minorWords) {
  
  if (title.length == 0) {
    return "";
  }
  
  
  let titleArr = title.toLowerCase().split(" ");
  let minorArr = minorWords ? minorWords.toLowerCase().split(" ") : [];
  let result = [titleArr[0].charAt(0).toUpperCase() + titleArr[0].slice(1).toLowerCase()];

  
  for (let i = 1; titleArr.length > i; i++) {
    if (minorArr.includes(titleArr[i]) === false) {
      result.push(titleArr[i].charAt(0).toUpperCase() + titleArr[i].slice(1))
    } else {
      result.push(titleArr[i])
    }
  }
  
  return result.join(" ");
}