import React, { useState } from "react";
import axios from "axios";

function ImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("image", selectedImage);

      const response = await axios.post("http://localhost:9000/api/upload", formData);
      console.log(response.data);

      // Lakukan tindakan lain setelah berhasil mengunggah gambar
      alert("Gambar berhasil diunggah!");
    } catch (error) {
      console.error(error.message);
      // Tindakan jika terjadi kesalahan
      alert("Gagal mengunggah gambar!");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Unggah Gambar</button>
    </div>
  );
}

export default ImageUpload;
