const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());

app.use("/uploads", express.static("uploads"));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("image"), (req, res) => {
  res.json({
    status: "ok",
    url: "/uploads/" + req.file.filename,
  });
});

app.get("/images", (req, res) => {
  const directoryPath = path.join(__dirname, "uploads");
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Kausta lugemisel tekkis viga" });
    }
    
    const images = files.map((file) => "/uploads/" + file);
    res.json(images);
  });
});

app.listen(3001, () => console.log("Localhost server töötab port 3001"));