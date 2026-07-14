<<<<<<< HEAD
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
});
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'swastik_BNB_Dev',
    allowedFormats: ["png","jpg","jpeg"],
  },
});
=======
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
});
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'swastik_BNB_Dev',
    allowedFormats: ["png","jpg","jpeg"],
  },
});
>>>>>>> 1f0844ad4ba906b6c25095a97d6744a8b3954bff
module.exports={cloudinary,storage}