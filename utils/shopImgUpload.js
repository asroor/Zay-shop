const path = require('path');
const multer = require('multer');


const imgStorage = multer.diskStorage({
	destination: './public/assets/img/',
	filename: function (req, file, cb) {
		cb(null, Date.now() + '_' + file.originalname);
	}
});

const upload = multer({
	storage: imgStorage,
	limits: { fileSize: 10000000 },
	fileFilter: function (req, file, cb) {
		checkFileFilter(file, cb);
	}
});
function checkFileFilter(file, cb) {
	const fileType = /jpeg|jpg|png|gif/;
	const extname = fileType.test(path.extname(file.originalname).toLowerCase());
	const mimetype = fileType.test(file.mimetype);
	if (extname && mimetype) {
		return cb(null, true)
	} else {
		cb('File not found')
	}
}


module.exports = {
	upload: upload
}