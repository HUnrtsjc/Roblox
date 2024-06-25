<?php
// รับข้อมูลที่ส่งมาจาก POST request
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// ข้อมูลที่จะบันทึกลงในไฟล์ .txt
$data = "Name: $name\nEmail: $email\nMessage: $message\n";

// ชื่อไฟล์ .txt ที่ต้องการบันทึกข้อมูล
$file = 'data.txt';

// เปิดไฟล์ .txt และบันทึกข้อมูล
if (file_put_contents($file, $data, FILE_APPEND | LOCK_EX) !== false) {
    http_response_code(200); // ส่ง response 200 OK ถ้าบันทึกสำเร็จ
} else {
    http_response_code(500); // ส่ง response 500 Internal Server Error ถ้ามีปัญหาในการบันทึก
}
?
