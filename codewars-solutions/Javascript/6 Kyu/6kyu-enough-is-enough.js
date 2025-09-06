// Codewars: Delete occurrences of an element if it occurs more than n times
// 6 kyu: https://www.codewars.com/kata/554ca54ffa7d91b236000023

function deleteNth(arr,n){
  
  let map = {};
  let result = []
  
  for (let elem of arr) {
    let key = String(elem);
    if ((map[key] || 0) < n) {
      result.push(elem);
      map[key] = (map[key] || 0) + 1;
  }
}

  return result
}