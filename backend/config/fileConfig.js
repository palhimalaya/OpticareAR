const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log({ file, body: req.body, param: req.params });
        let url = `./uploads/images`;
        createFolder(url);
        cb(null, url);
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname)); 
    },
});

const createFolder = (path) => {
    try {
        if (!fs.existsSync(path)) {
            fs.mkdirSync(path, { recursive: true });
            console.log('Directory is created.');
        } else {
            console.log('Directory already exists.');
        }
    } catch (err) {
        console.log(err);
    }
};


const fileFilter = (req, file, cb) => {
    console.log(file);
    if (
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/png'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

exports.upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5  // limit is 5MB
    }
})