import Psikolog from "../models/Psikolog_Model.js"
import bcryptjs from "bcryptjs";
import {AZURE_CONTAINER_NAME, AZURE_STORAGE_CONNECTION_STRING} from "../config/storage.js";
import { BlobServiceClient } from "@azure/storage-blob";

export const getPsikolog = async(req, res) => {
    try{
        const response = await Psikolog.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const registerPsikologi = async (req, res) => {
    const { name, username, password, spesialisasi, deskripsi, nomerTelepon, kota, image } = req.body;
  
    try {
      
    // Cek apakah username sudah ada dalam database
    const existingUser = await Psikolog.findOne({ where: { username_psikolog: username } });

    if (existingUser) {
      // Jika username sudah ada, berikan respons bahwa username tidak tersedia
      return res.status(409).json({ msg: 'Username is already taken' });
    }
    
      // Generate salt for hashing
      const salt = await bcryptjs.genSalt(10);
      // Hash the password
      const hashedPassword = await bcryptjs.hash(password, salt);

      let imageUrl = null;

      if (image) {
        // Upload the image to Azure Blob Storage
        const blobServiceClient = BlobServiceClient.fromConnectionString(
        AZURE_STORAGE_CONNECTION_STRING
      );
      const containerClient = blobServiceClient.getContainerClient(AZURE_CONTAINER_NAME);

      const imageBuffer = Buffer.from(image, 'base64');
      const imageName = `profile${username}.jpg` + ''; // Generate a random filename
      const blockBlobClient = containerClient.getBlockBlobClient(imageName);
      await blockBlobClient.uploadData(imageBuffer);

      imageUrl = blockBlobClient.url;
    }
      // Create user with hashed password
      await Psikolog.create({
        nama_psikolog: name,
        username_psikolog: username,
        password_psikolog: hashedPassword,
        spesialisasi: spesialisasi,
        deskripsi: deskripsi,
        notelepon: nomerTelepon,
        kota: kota,
        imageurl: imageUrl
      });
  
      res.status(201).json({ msg: "User Created!" });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Internal Server Error" });
    }
  };