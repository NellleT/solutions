// Codewars: Remove All The Marked Elements of a List
// 7 kyu: https://www.codewars.com/kata/563089b9b7be03472d00002b

Array.prototype.remove_ = function(integer_list, values_list){
  
  for (let i = integer_list.length; 0 < i + 1; i--) {
    if (values_list.includes(integer_list[i])) {
      integer_list.splice(integer_list.indexOf(integer_list[i]), 1);
    }
  }
  
  return integer_list;
}