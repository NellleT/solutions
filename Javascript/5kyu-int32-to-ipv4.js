// Codewars: int32 to IPv4
// 5 kyu: https://www.codewars.com/kata/52e88b39ffb6ac53a400022e

function int32ToIp(int32){
    if (int32 < 129) {
      return `0.0.0.${int32}`
    }
    let arr = []
    let octet1 = (int32 >> 24) & 255
    let octet2 = (int32 >> 16) & 255
    let octet3 = (int32 >> 8) & 255
    let octet4 = int32 & 255
    arr.push(octet1, octet2, octet3, octet4)
    return arr.join(".")
  }