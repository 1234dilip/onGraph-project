const multer = require('multer')

const stroage = multer.diskStorage({
    destination:(req,res,cb) => {
        cb(null,uploads)
    },
    filename:(req,file,cb) => {
        cb(null,file.fieldname + '-'  + Date.now())
    }
})

const upload = multer({ 
    stroage:multerStorage,
    fileFilter:fileStorage
 });