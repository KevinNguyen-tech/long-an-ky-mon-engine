// engine.js
// Điều phối board, state và rules

import { isMoveLegal } from "./rules.js";

export function makeMove(state, from, to) {
  if (!isMoveLegal(state, from, to)) {
    return state;
  }

  // sau này cập nhật state ở đây
  return state;
}
