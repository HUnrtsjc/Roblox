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

    // อ่านข้อมูลเก่าจากไฟล์ .txt หากมี
    var existingData = localStorage.getItem('savedData') || '';

    // บันทึกข้อมูลใหม่ไปยัง LocalStorage
    var combinedData = existingData + newData;
    localStorage.setItem('savedData', combinedData);

    // ดาวน์โหลดไฟล์ .txt ที่มีข้อมูลทั้งหมด
    var blob = new Blob([combinedData], { type: 'text/plain' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'data.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});
