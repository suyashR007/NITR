var cloudinary = require("./cloudinary_config");

const cloudStorage = (filename) => {
  return new Promise((resolve) => {
    cloudinary.uploader.upload(
      filename,
      {
        folder: "product_images",
      },
      (err, result) => {
        resolve({
          id: result.id,
          url: result.url,
        });
      }
    );
  });
};

module.exports = cloudStorage;
