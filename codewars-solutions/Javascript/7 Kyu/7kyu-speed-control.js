// Codewars: Speed Control
// 7 kyu: https://www.codewars.com/kata/56484848ba95170a8000004d

function gps(s, x) {
  
  let speed = [];
  let delta_distance = 0;
  
  if (x.length < 2) {
    return 0;
  }
  
  for (let i = 0; x.length - 1 > i; i++) {
    delta_distance = x[i + 1] - x[i];
    speed.push((3600 * delta_distance) / s);
  }
  
  return Math.max(...speed.map(Math.floor));
}