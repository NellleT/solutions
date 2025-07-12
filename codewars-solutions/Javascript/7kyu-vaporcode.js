// Codewars: V A P O R C O D E
// 7 kyu: https://www.codewars.com/kata/5966eeb31b229e44eb00007a

function vaporcode(string) {
  return string.toUpperCase().split(" ").join("").split("").join("  ");
}