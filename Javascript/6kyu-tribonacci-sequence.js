function tribonacci(signature,n){
    let start = signature
    let sequence = []
    if (n == 1) {
      return signature.slice(0, 1)
    } else if (n == 0) {
      return []
    } else if (n == 2) {
      return signature.slice(0, 2)
    }
    for (let i = 0; i < n - 3; i++) {
      let iterated = start.slice(i, i + 3)
      start.push(iterated.reduce((accumulator, currentValue) => accumulator + currentValue));
    }
    return start
  }