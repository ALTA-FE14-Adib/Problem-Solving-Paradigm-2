//Problem 3 - Frog
// There are N stones, numbered 1, 2, ..., N. For each i(i <= i <= N), the height of Stone i is hi. There is a frog who
// initially on Stone 1. He will repeat the following action some number of times to reach stone N :
// if the frog is currently on Stone i, jumpt to Stone i + 1 or Stone i + 2. Here, a cost of |hi - hj| is incured, where
// j is the stone to land on.
// Find the minimum possible total cost incurred before the frog reaches Stone N.
// Constrain :
// - All value input are integers.
// - 2 <= N <= 10^5
// - 1 <= hi <= 10^4

function frog(h: number[]): number {
  const n = h.length; //ini bisa ga di pake jadi langsung panggil h.length tapi lebih simpel jadi enak diliat kalo pake n
  const frogStep = Array(n).fill(Infinity);
  frogStep[0] = 0;
  for (let i = 1; i < n; i++) {
    frogStep[i] = Infinity;
    for (let j = i - 1; j >= 0 && i - j <= 2; j--) {
      frogStep[i] = Math.min(frogStep[i], frogStep[j] + Math.abs(h[i] - h[j]));
    }
  }
  console.log(frogStep);
  return frogStep[n - 1];
}
console.log(frog([10, 30, 40, 20]));
console.log(frog([30, 10, 60, 10, 60, 50]));
