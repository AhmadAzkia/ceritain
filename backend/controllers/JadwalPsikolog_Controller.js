import JadwalPsikolog from "../models/JadwalPsikolog_model.js"

export const getJadwalPsikolog = async(req, res) => {
    try{
        const response = await JadwalPsikolog.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}


export const register = async (req, res) => {
    const { name, username, password, image } = req.body;
  
    try {
      
    // Cek apakah username sudah ada dalam database
    const existingUser = await User.findOne({ where: {username} });

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
      const imageName = `profile ${username}` + '.png'; // Generate a random filename
      const blockBlobClient = containerClient.getBlockBlobClient(imageName);
      await blockBlobClient.uploadData(imageBuffer);

      imageUrl = blockBlobClient.url;
    }
      // Create user with hashed password
      await User.create({
        nama_user: name,
        username: username,
        password: hashedPassword,
        imageUrl: imageUrl,
      });
  
      res.status(201).json({ msg: "User Created!" });
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Internal Server Error" });
    }
  };