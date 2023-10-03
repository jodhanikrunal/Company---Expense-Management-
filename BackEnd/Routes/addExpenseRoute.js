const multer = require("multer");
 
const fileUploaderMiddleware = require("../Middlewares/fileUploadMiddleware");

const{
    addExpense,
}= require('../Controllers/addExpenseController');
const authMiddleware = require('../Middlewares/AuthMiddleware');

const addExpenseRoute = (app) => {
    app.post("/addExpense",addExpense);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  const upload = multer({ storage: storage });

  app.post(
    "/expense/upload-reciept",
    fileUploaderMiddleware
  );
 
module.exports = addExpenseRoute