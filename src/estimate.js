const roomBase = {
  Kitchen: 180000,
  Bedroom: 90000,
  "Full Home": 700000,
  Office: 250000,
};
const sizeMultiplier = { Small: 0.75, Medium: 1, Large: 1.45 };
const finishMultiplier = {
  "Standard Laminate": 1,
  "High-Gloss Acrylic": 1.28,
  "Premium PU Finish": 1.55,
};

export function estimateRange(room, size, finish) {
  const estimate =
    Math.round(
      (roomBase[room] * sizeMultiplier[size] * finishMultiplier[finish]) / 5000,
    ) * 5000;
  return [
    Math.round((estimate * 0.9) / 1000) * 1000,
    Math.round((estimate * 1.15) / 1000) * 1000,
  ];
}
