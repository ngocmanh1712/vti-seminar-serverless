## Serverless 紹介

#### 1. Giới thiệu về Serverless
- Nhắc lại về mô hình server cũ (EC2) đã được Hoàng giới thiệu trong seminar trước. 
- Đưa ra điểm hạn chế của việc scaling (không nhanh chóng, có giới hạn) cũng như tiền tiêu thụ (không dùng cũng mất tiền) của mô hình này.
- Giới thiệu về mô hình serverless để giải quyết các vấn đề trên.
- Điểm mạnh điểm yếu.
- Phân biệt các trường hợp nên dùng serverless, trường hợp nên dùng server truyền thống.
- Các framework hỗ trợ làm serverless hiện nay.
#### 2. Demo tạo API đơn giản trên AWS Lamda, API Gateway
- Source code (API get data đơn giản) deploy lên Lambda sẽ đc code từ trước.
- Demo tạo Lambda, debug đơn giản bằng cloudwatch logs.
- Tạo API gateway, gắn liên kết với lambda và deploy api.
#### 3. Giới thiệu về CI/CD, và các cách áp dụng cho Serverless trên AWS
- Giới thiệu qua về CI/CD
- CI/CD cho serverless
#### 4. Demo phương pháp CI/CD sử dụng AWS Codebuild, AWS Lambda, AWS S3.
- Deploy API lên Lambda
