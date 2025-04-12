// Codewars: A Strange Trip to the Market
// 8 kyu: https://www.codewars.com/kata/55ccdf1512938ce3ac000056

function isLochNessMonster(text) {
    const pattern = /tree fiddy|3\.50|three fifty/i;
    return pattern.test(text);
}