// Codewars: Did she say hallo?
// 8 kyu: https://www.codewars.com/kata/56a4addbfd4a55694100001f


function validateHello(greetings) {
  return /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings);
}