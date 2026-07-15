# 🦉 Đề xuất nâng cấp TinyOwl (Phase 2)

Dựa trên việc phân tích chuyên sâu trang web **Myna.vn** và các ứng dụng hàng đầu (Monkey Junior, Lingokids, Khan Academy Kids), tôi đề xuất một kế hoạch nâng cấp lớn (Phase 2) cho ứng dụng TinyOwl để mang lại trải nghiệm toàn diện và chuyên nghiệp hơn.

## Phân tích các tính năng cốt lõi (Từ Myna.vn & Đối thủ)

1. **Học theo kỹ năng riêng biệt (Myna.vn)**
   - Hiện tại TinyOwl gộp chung từ vựng và bài tập vào một luồng (flow). 
   - Myna.vn chia rõ: *Từ vựng, Câu giao tiếp, Hội thoại, Luyện nghe*. Điều này giúp người học tập trung vào kỹ năng mình còn yếu.

2. **Lộ trình bám sát sách giáo khoa (Myna.vn)**
   - Myna có lộ trình "Học tốt Tiếng Anh Lớp 2, 3, 4 - Global Success". Đây là điểm cộng lớn thu hút phụ huynh Việt Nam.

3. **Bảng xếp hạng (Leaderboard - Gamification)**
   - Khơi dậy sự cạnh tranh lành mạnh. Trẻ em thích nhìn thấy tên mình trên bảng vàng cùng các bạn khác.

4. **Học qua ngữ cảnh / Câu hoàn chỉnh (Lingokids / Monkey Junior)**
   - Thay vì chỉ học từ đơn, cần có các bài tập xếp chữ thành câu hoặc nối câu với ngữ cảnh.

---

## 🛠 Kế hoạch triển khai (Proposed Changes)

Dưới đây là các tính năng dự kiến sẽ được thêm vào hệ thống hiện tại của TinyOwl:

### 1. Thêm chế độ "Học theo kỹ năng" (Skill Practice)
Tạo thêm một tab/khu vực trên trang chủ cho phép bé chọn luyện tập riêng biệt:
- 📖 **Từ vựng**: Dạng Flashcard vuốt (Swipe) liên tục để ôn bài.
- 💬 **Mẫu câu**: Bài tập ghép từ thành câu hoàn chỉnh (Sentence Builder). Cực kỳ quan trọng để giao tiếp.
- 👂 **Luyện nghe**: Nghe một câu dài và chọn hình ảnh mô tả đúng ngữ cảnh.

### 2. Xây dựng "Bảng xếp hạng" (Leaderboard)
- Thêm một màn hình `Ranking` (Xếp hạng) hiển thị top người chơi trong tuần (Weekly Leaderboard).
- Vì app hiện chạy offline (không có backend), tôi sẽ tạo ra các **"bạn ảo" (bots)** với điểm số dao động ngẫu nhiên xung quanh điểm của bé. Bé sẽ có cảm giác đang thi đua thực sự.

### 3. Nâng cấp Dữ liệu học tập (Curriculum)
- Thêm một số bài học mang tính chất **Hội thoại (Dialogue)**: Nhân vật A nói, nhân vật B trả lời. Bé sẽ nghe và nhập vai.
- Cấu trúc lại trang Roadmap: Chia thành các "Khóa học" thay vì chỉ một lộ trình duy nhất. 
  - Khóa 1: Tiếng Anh cơ bản (Từ con số 0)
  - Khóa 2: Giao tiếp làm quen (Lớp 1-2)

### 4. Báo cáo cho phụ huynh (Parent Dashboard)
- Một góc nhỏ (cần nhập mật khẩu hoặc giải toán cơ bản để vào) dành cho phụ huynh.
- Hiển thị biểu đồ thời gian học trong tuần, những từ bé hay làm sai, điểm mạnh của bé.

---

## User Review Required

> [!IMPORTANT]
> Đây là một bản cập nhật lớn sẽ thay đổi khá nhiều về cấu trúc giao diện (thêm menu điều hướng bên dưới hoặc bên cạnh). Bạn có đồng ý với hướng đi này không?

> [!TIP]
> Trong các tính năng trên (Bảng xếp hạng, Học theo kỹ năng, Báo cáo phụ huynh), bạn muốn tôi ưu tiên làm tính năng nào trước tiên?

## Open Questions

- Bạn có muốn tôi thay đổi tông màu hoặc phong cách thiết kế hiện tại không?
- Với tính năng "Báo cáo phụ huynh", bạn có muốn đặt mã PIN (ví dụ: `1234`) để ngăn bé tự bấm vào không?

## Verification Plan
1. **Thiết kế UI**: Cập nhật CSS để hỗ trợ Bottom Navigation Bar (Menu dưới cùng).
2. **Logic JS**: Viết thêm module `leaderboard.js` và `skills.js`.
3. **Kiểm thử**: Đảm bảo quá trình chuyển đổi giữa Lộ trình (Roadmap) và Kỹ năng (Skills) diễn ra mượt mà không lỗi.
