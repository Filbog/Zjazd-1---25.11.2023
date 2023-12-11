let today = new Date();
let zima = new Date("2023-12-22");
let time = Math.round(
  (zima.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
);

alert(`Do pierwszego dnia zimy w roku 2023 zostało tylko ${time} dni!`);
