- Để chạy được bài demo, máy tính cần phải cài đặt trước:
+ Node.Js
+ MongoDB

- Các bước chạy:
B1: Mở 2 Terminal của 2 thư mục client-reactjs và server-nodejs trong source
B2: Chạy lệnh "npm install" cho cả 2 Terminal (không thoát khi kết thúc)
B3: Mở MongoDB Compass, Tạo một connection có uri "mongodb://localhost:27017" và connect
B4: Bên trong connection vừa kết nối, Tạo database có tên "realtimechat" với collection name bất kì (có thể xóa sau)
B5: Chạy npm start đối với cả 2 Terminal được mở ở B2, chương trình sẽ tự mở trình duyệt với một trang web có url là localhost:3000 
và tạo 2 database (messages, users) trong mongodb.
B6: Done. (Đăng nhập -> Đăng ký: đăng ký tài khoản và sử dụng hệ thống chat nếu chưa có sẵn dữ liệu database trong mongodb)

(Nếu muốn) --- (B5.5: Add data cho 2 database được tạo bằng 2 file cùng tên là users.json và messages.json trong thư mục database của source)

- Một số tài khoản có sẵn nếu đã add database vào MongoDB ở bước 5.5:
+ ntd@gmail.com
+ cnb@gmail.com
+ ntl@gmail.com
Tất cả đều có password là 123456789


- Link video demo:
https://drive.google.com/file/d/13UhcP00pIDV_BYVSw1Y-1PfOZpTca2Bh/view?usp=sharing

hoặc:
https://youtu.be/2aSw7CorgK4
