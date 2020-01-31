import path from "path";
import express from "express";

export const Download = {
  url: "/download/:type_path/:filename",
  func: function(req, res) {
    const { type_path, filename } = req.params;
    const file = path.resolve(
      __dirname,
      "..",
      "..",
      "uploads",
      type_path,
      filename
    );
    res.download(file);
  }
};

export const ViewFile = {
  url: "/files",
  func: express.static(path.resolve(__dirname, "..", "..", "uploads"))
};
