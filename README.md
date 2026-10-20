# Gửi Ấy Vy, tháng Mười

Website chúc mừng ngày Phụ nữ Việt Nam 20/10: bó hoa vẽ SVG, thư bấm mở, mèo tương tác, lịch tháng 10/2026 và một khu vườn với hoa đung đưa, cánh hoa rơi nhẹ. Responsive trên điện thoại và máy tính; có hỗ trợ giảm chuyển động và điều hướng bằng bàn phím.

Món quà gồm bốn trang bấm lần lượt: lời chào → lịch 20/10 → phong bì và bức thư → vườn hoa. Mỗi lần chỉ hiển thị một trang, có nút quay lại và dấu chấm điều hướng.

**Website:** https://mannvce200244-hub.github.io/gui-nang-20-10/

Quét mã QR bên dưới bằng camera điện thoại để mở trang. Link công khai dùng được với Wi-Fi hoặc 4G/5G, không cần máy tính chạy.

![QR mở website](public/qr-20-10.png)

## Chạy

```sh
npm install
npm run dev
```

Mở địa chỉ Vite hiển thị. Để quét bằng điện thoại trong cùng Wi-Fi, dùng địa chỉ `Network` (IP máy tính), không dùng `localhost`. Máy tính cần đang chạy ứng dụng và cho phép kết nối qua tường lửa.

## Đưa lên mạng và chia sẻ QR

```sh
npm run build
```

Build được lưu trong `docs/`. GitHub Pages phục vụ nhánh `main`, thư mục `/docs`. Sau khi sửa mã nguồn, chạy build và commit cả mã nguồn lẫn `docs/`, rồi push lên GitHub để cập nhật website.

Mở website từ đường dẫn công khai, bấm **Gửi chút yêu thương**: mã QR tự lấy đường dẫn hiện tại. Chọn **Lưu mã QR** để tải PNG. Khi chạy dev, mã QR vẫn là địa chỉ cục bộ; dùng mã QR trong README để chia sẻ bản công khai.

## Cá nhân hóa

- Nội dung thư và lời giới thiệu: `index.html`.
- Lời chúc của mèo: mảng `wishes` trong `src/main.js`.
- Màu sắc và bố cục chính: `src/style.css`.
- Vườn hoa và chuyển cảnh: `src/garden.css`, `src/main.js`.
- Bố cục từng trang: `src/journey.css`.

Không cần tài khoản, API key hoặc dịch vụ tạo QR bên ngoài. Font Google là tùy chọn; nếu không tải được thì trang sử dụng font dự phòng.
