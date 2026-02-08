# Long Ẩn Kỳ Môn Engine

**Long Ẩn Kỳ Môn** là một engine cờ tướng (Xiangqi) mã nguồn mở, được xây dựng với mục tiêu:
- trong sáng
- dễ học
- dễ mở rộng
- tôn trọng tinh thần cờ truyền thống phương Đông

Dự án tập trung vào **engine (bộ luật & logic)**, không phải game thương mại.

---

## 🎯 Mục tiêu dự án

- Xây dựng một engine cờ tướng:
  - rõ ràng về luật
  - tách bạch logic và giao diện
  - có thể dùng cho web, app, AI, bot
- Phù hợp cho:
  - người học lập trình
  - người nghiên cứu cờ
  - cộng đồng Pi / Web3 giáo dục
- Không hướng đến cờ bạc hay thương mại hóa thiếu kiểm soát

---

## 🧠 Triết lý thiết kế

- **Engine trước – giao diện sau**
- **Đơn giản trước – tối ưu sau**
- **Hiểu được trước – mạnh sau**
- Mỗi phần có trách nhiệm riêng:
  - bàn cờ
  - quân cờ
  - luật
  - engine

Tên *Long Ẩn Kỳ Môn* mang ý nghĩa:
> Trí tuệ ẩn sâu, không phô trương, nhưng vững chắc và bền bỉ.

---

## 📁 Cấu trúc dự kiến

```text
long-an-ky-mon-engine/
├── README.md
├── index.html        # demo hiển thị
├── main.js           # điều phối
└── src/
    ├── board.js      # bàn cờ
    ├── piece.js      # quân cờ
    ├── rules.js      # luật cờ
    ├── state.js      # trạng thái ván cờ
    └── engine.js     # lõi engine# long-an-ky-mon-engine
A modular Xiangqi (Chinese Chess) engine for Pi Network ecosystem.
