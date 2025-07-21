# 🚀 BACKEND_TS_BASE

Một project Node.js backend được cấu hình sẵn, sử dụng **TypeScript**, **Express**, **ESLint v9**, **Prettier** và hỗ trợ file `.env`.  
Thích hợp để mở rộng nhanh trong các dự án thực tế hoặc MVP.

---

## 🧰 Công nghệ sử dụng

| Công nghệ   | Phiên bản |
| ----------- | --------- |
| TypeScript  | ^5.8.3    |
| Express     | ^5.1.0    |
| Dotenv      | ^17.2.0   |
| ts-node-dev | ^2.0.0    |
| ESLint      | ^9.31.0   |
| Prettier    | ^3.6.2    |
| cross-env   | ^7.0.3    |

---

## 🗂️ Cấu trúc thư mục

src/
├── config/ # Cấu hình chung như biến môi trường
├── controllers/ # Xử lý logic cho route
├── middlewares/ # Middleware Express
├── models/ # Mô hình dữ liệu (nếu có DB)
├── routes/ # Khai báo route
├── services/ # Tầng business logic
├── utils/ # Hàm tiện ích dùng chung
├── validations/ # Validation schema (Zod, Joi, v.v.)
├── app.ts # Cấu hình app Express
└── server.ts # Điểm khởi động ứng dụng

---

## 📜 Scripts hữu ích

| Lệnh                 | Mục đích                                         |
| -------------------- | ------------------------------------------------ |
| `npm run dev`        | Chạy server ở chế độ development (có hot reload) |
| `npm run build`      | Biên dịch TypeScript sang thư mục `dist/`        |
| `npm run clean`      | Xoá và tạo lại thư mục `dist/`                   |
| `npm run production` | Build và chạy server ở chế độ production         |
| `npm run lint`       | Kiểm tra mã nguồn với ESLint                     |
| `npm run format`     | Định dạng mã với Prettier                        |

---

## 🚀 Cách chạy dự án

### 📦 Bước 1: Clone project

```bash
git clone https://github.com/Thanh1610/Backend-TypeScript-Base.git
cd backend_ts_base


- Bước 1: Clone project
  lệnh: |
  git clone https://github.com/your-username/backend_ts_base.git
  cd backend_ts_base
- Bước 2: Cài đặt dependencies
  lệnh: npm install
- Bước 3: Tạo file `.env`
  lệnh: cp .env.example .env
  nội_dung_env_ví_dụ: |
  PORT=3001
- Bước 4: Chạy server ở chế độ dev
  lệnh: npm run dev
  ghi_chú: Truy cập tại http://localhost:3001

lint_và_format:

- Lint toàn bộ code: npm run lint
- Format code: npm run format
```
