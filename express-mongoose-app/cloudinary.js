import cloudinary from "cloudinary";
import * as dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: "dgippdeuy",
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

export default cloudinary;