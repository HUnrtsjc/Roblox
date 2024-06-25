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

    // อ่านข้อมูลเก่าจาก LocalStorage หากมี
    var existingData = localStorage.getItem('savedData') || '';

    // บันทึกข้อมูลใหม่ไปยัง LocalStorage
    var combinedData = existingData + newData;
    localStorage.setItem('savedData', combinedData);

    // ดาวน์โหลดไฟล์ .txt ที่มีข้อมูลทั้งหมด
    var blob = new Blob([combinedData], { type: 'text/plain' });

    // สร้าง URL สำหรับไฟล์ .txt
    var url = URL.createObjectURL(blob);

    // อัพเดทลิงก์ดาวน์โหลดใหม่ โดยไม่ต้องสร้างลิงก์ใหม่
    var downloadLink = document.getElementById('downloadLink');
    if (!downloadLink) {
        downloadLink = document.createElement('a');
        downloadLink.id = 'downloadLink';
        downloadLink.style.display = 'none';
        document.body.appendChild(downloadLink);
    }
    downloadLink.href = url;
    downloadLink.download = 'data.txt';
    downloadLink.click();

    // คืนค่า URL ให้คงอยู่เพื่อให้ไม่ต้องสร้าง URL ใหม่ทุกครั้ง
    URL.revokeObjectURL(url);
});
