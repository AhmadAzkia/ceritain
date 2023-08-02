// aboutUsText.js
import hand from "../components/img/decrease.png";
import eyes from "../components/img/eavesdropping.png";
import clock from "../components/img/clock.png";
import database from "../components/img/database-storage.png"

const aboutUsText = {
    title: "Kenapa harus pilih Ceritain?",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    reasons: [
      {
        title: "Harga yang di berikan relatif lebih murah",
        description: "Ceritain memberikan harga yang relatif murah untuk anda, karena kami ingin membantu siapapun yang butuh seseorang untuk mendengar keluh kesahnya tanpa mengeluarkan biaya yang cukup besar.",
        image: hand
      },
      {
        title: "Pendengar yang berada di Ceritain semuanya adalah ahli",
        description: "Semua pendengar yang berada di ceritain adalah lulusan S1 Psikologi, dan mereka ahli di bidang tertentu seperti Percintaan, Keluarga",
        image: eyes
      },
      {
        title: "Website yang di gunakan oleh Ceritain sangat cepat",
        description: "Ceritain di buat menggunakan framework ReactJs dan NodeJs, Jadi ketika anda bertransaksi atau scrolling website akan menjadi lebih menyenangkan karena cepat",
        image: clock
      },
      {
        title: "Database yang digunakan oleh Ceritain realtime 24/7",
        description: "Ceritain menggunakan Database dari AWS Azure. Otomatis database yang di gunakan oleh Ceritain akan Load terus 24/7",
        image: database
      },
      // Add more reasons as needed
    ],
  };
  
  export default aboutUsText;
  