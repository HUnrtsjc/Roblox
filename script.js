document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // หยุดการกระทำของฟอร์ม

    // รับค่าจาก input fields
    var dataToSave = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // เพิ่มข้อมูลใน LocalStorage
    var savedData = localStorage.getItem('savedData') ? JSON.parse(localStorage.getItem('savedData')) : [];
    savedData.push(dataToSave);
    localStorage.setItem('savedData', JSON.stringify(savedData));

    // สร้างไฟล์ .txt และดาวน์โหลด
    var blob = new Blob([JSON.stringify(savedData)], { type: 'text/plain' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'data.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
})
