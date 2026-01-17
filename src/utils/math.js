export function percentDiff(base, value) {
  return (((value - base) / base) * 100).toFixed(1);
}
