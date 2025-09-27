// Codewars: Ensure question
// 8 kyu: https://www.codewars.com/kata/5866fc43395d9138a7000006

function ensureQuestion(s) {
  return s.endsWith("?") ? s : s + "?";
}