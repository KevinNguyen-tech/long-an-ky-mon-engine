// boardView.js
// Chỉ chịu trách nhiệm VẼ bàn cờ

const CELL = 60;

export function drawBoard(ctx) {
  ctx.clearRect(0, 0, 540, 600);
  ctx.strokeStyle = "#000";

  // vẽ dọc
  for (let c = 0; c < 9; c++) {
    ctx.beginPath();
    ctx.moveTo(c * CELL + CELL / 2, CELL / 2);
    ctx.lineTo(c * CELL + CELL / 2, 9.5 * CELL);
    ctx.stroke();
  }

  // vẽ ngang
  for (let r = 0; r < 10; r++) {
    ctx.beginPath();
    ctx.moveTo(CELL / 2, r * CELL + CELL / 2);
    ctx.lineTo(8.5 * CELL, r * CELL + CELL / 2);
    ctx.stroke();
  }

  // sông
  ctx.font = "24px serif";
  ctx.fillText("楚 河", 150, 305);
  ctx.fillText("漢 界", 300, 305);
}
