
function convert (from, fromAmount, to, convertionRate) {
    let usd = fromAmount/convertionRate[from]
    let ans = usd*convertionRate[to]
  return ans
}

export default convert