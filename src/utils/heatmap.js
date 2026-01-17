export function heatColor(value, min, max) {
  if (min === max) return "hsl(120,70%,75%)";
  const ratio = (value - min) / (max - min);
  const hue = 120 - ratio * 120;
  return `hsl(${hue},70%,60%)`;
}
