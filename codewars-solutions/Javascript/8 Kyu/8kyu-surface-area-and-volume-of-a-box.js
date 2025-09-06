// Codewars: Surface Area and Volume of a Box
// 8 kyu: https://www.codewars.com/kata/565f5825379664a26b00007c

function getSize(width, height, depth) {
    return [((depth * width) * 2) + ((depth * height) * 2) + ((width * height) * 2), width * height * depth];
}