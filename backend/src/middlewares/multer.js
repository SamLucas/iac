import multer from "multer";
import path from "path";
import crypto from "crypto";

const filename = {
  filename: (req, file, cb) => {
    crypto.randomBytes(16, (err, hash) => {
      if (err) cb(err);
      if (file != null) cb(null, `${file.originalname}`);
      else cb(null, null);
    });
  }
};

const rest = {
  limits: {
    fileSize: 10 * 1024 * 1024
  },
  fileFilter: (req, file, cb) => cb(null, true)
};

const MulterConfigDownloads = {
  dest: path.resolve(__dirname, "..", "..", "uploads", "Download"),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "..", "uploads", "Download"));
    },
    ...filename
  }),
  ...rest
};

const MulterConfigMembros = {
  dest: path.resolve(__dirname, "..", "..", "uploads", "members"),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "..", "uploads", "members"));
    },
    ...filename
  }),
  ...rest
};

const MulterConfigPapers = {
  dest: path.resolve(__dirname, "..", "..", "uploads", "papers"),
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "..", "uploads", "papers"));
    },
    ...filename
  }),
  ...rest
};

export default {
  MulterConfigDownloads,
  MulterConfigMembros,
  MulterConfigPapers
};
