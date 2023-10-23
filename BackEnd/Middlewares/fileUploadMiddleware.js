//By Rj Fachara
const multer = require('multer');
const path = require('path');
const fs = require('fs'); 

const directory = 'uploads';

if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
}

// console.log('Directory:', directory);

// File upload middleware
const fileUploaderMiddleware = (req, res, next) => {
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, directory);
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now();
            const originalName = file.originalname;
            const fileExtension = path.extname(originalName);
            const filename = uniqueSuffix + fileExtension;
            cb(null, filename);
        }
    });
    
    const upload = multer({ storage });

    upload.single('expenseDocument')(req, res, (err) => {
        if (err) {
            console.log('Error in middleware:', err);
            return res.status(400).json({ success: false, message: 'File upload failed' });
        }

        // console.log("Uploaded File : ",req.file);

        if (!req.file) {
            return res.status(400).json({ success: false, message: 'No file uploaded' });
        }
        const filename = req.file.filename;
        const fileUrl = `http://localhost:4000/${directory}/${filename}`;
        req.fileUrl = fileUrl;
        next();
    });
};

module.exports = fileUploaderMiddleware;
