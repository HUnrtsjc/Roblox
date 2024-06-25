document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // หยุดการกระทำของฟอร์ม

    // รับค่าจาก input fields
    var dataToSave = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // สร้างข้อมูลที่จะบันทึกลงในไฟล์ .txt
    var newData = `${dataToSave.name}, ${dataToSave.email}, ${dataToSave.message}\n`;

    // สร้าง Blob จากข้อมูลที่ต้องการบันทึก
    var blob = new Blob([newData], { type: 'text/plain' });

    // สร้าง URL สำหรับไฟล์ .txt
    var url = URL.createObjectURL(blob);

    // สร้าง Element <a> สำหรับดาวน์โหลดไฟล์ .txt
    var a = document.createElement('a');
    a.href = url;
    a.download = 'data.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // คืนค่า URL ให้คงอยู่เพื่อให้ไม่ต้องสร้าง URL ใหม่ทุกครั้ง
    URL.revokeObjectURL(url);
});
