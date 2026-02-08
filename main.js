// main.js
// Điều phối giao diện và engine

import { drawBoard } from "./src/boardView.js";
import { createInitialState } from "./src/state.js";

const canvas = document.getElementById("board");
const ctx = canvas.getContext("2d");

// khởi tạo state (chưa dùng nhiều, nhưng đặt nền)
const state = createInitialState();

// vẽ bàn cờ
drawBoard(ctx);
