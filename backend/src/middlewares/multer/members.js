import multer from "multer";
import path from "path";
export default {
  dest: path.resolve(__dirname, "..", "..", "..", "uploads", "members"),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "..", "..", "uploads", "members"));
    },
    filename: (req, file, cb) => {
      if (file != null) cb(null, file.originalname);
      else cb(null, fileName);
    }
  }),
  limits: {
    fileSize: 10 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => cb(null, true)
};
