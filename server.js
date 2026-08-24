const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// อนุญาตให้ระบบอื่นเรียกใช้งาน API ข้ามโดเมนได้
app.use(cors());
app.use(express.json());

// สร้าง Route สำหรับทดสอบการเชื่อมต่อ (Method GET)
app.get('/api/test', (req, res) => {
    res.json({ 
        status: "success", 
        message: "เชื่อมต่อกับ REST API บน Render สำเร็จแล้ว!" 
    });
});

app.post('/api/nodered-test', (req, res) => {
    console.log("Data received from Node-RED:", req.body); // แสดงข้อมูลใน Log ของ Render

    res.json({
        status: "success",
        message: "API ได้รับข้อมูลจาก Node-RED เรียบร้อยแล้ว!",
        yourData: req.body // ส่งข้อมูลกลับไปให้ Node-RED ดูว่าได้รับตรงกันไหม
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
