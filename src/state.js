// state.js
// Lưu trạng thái hiện tại của ván cờ

export function createInitialState() {
  return {
    board: null,
    pieces: [],
    turn: "red"
  };
}
