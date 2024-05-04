let currentStep = 0;
let musicStarted = false; // Menyimpan status musik

const messages = [
  "Oik Oik Tekan tombol dibawah yahhh wkwkw, Tapi kalau sudah kau picit jangan langsung lanjut yah tunggu bentar.",
  "TUnggu Bentar dannn picit lagiiii lanjut .",
  "Cie ada musik yah kan .",
  "Enaknya Musik nya kan , Pas nya musik nya Ini??? .",
  "Coba Tekan lanjut lagi hasian.........................",
  "Coba Tekan Lagi",
  "bagus Nya Tombol Nya?................",
  "Kalau Bagus Bilang Bagus Yah Tapi dalam Hati saja Jangan Pala teriak kau awok awok",
  "Tekan Lagi TOmbolnya Hasian aku Mau cerite",
  "Thank You yah 2 tahun sama ku walau dulu aku nembak kau di dekat kuburan lapbol wkwkwk.Tapi untung diterima wkwk bersyukur kali woyyyy, jadi jangan kau bilang gk bersyukur awak da....",
  "Walaupun Kadang Berantam Kita tapi tetap masih mau ku anju , yah kurasa kalau yang marah marah itu gk mungkin bisa kau jadi gk marah tapi yang kumau tetap lah mau ku anju hasian wkwk",
  "Pokok Nya Harus Tetap Mau ku anju yah awas aja tidak mau yah",
  "Pokok na mauliate ma da hasian ku , Maulite godang juga sama Tuhan sudah diciptakan wanita cantik bagaikan bidadari melalui nantulang ku yang baik itu.",
  "Sory yah aku bohong tadi kubilang ngerjai tugas , tapi aku ngerjai ini , karena udah lama aku pengen ngucapin ala ala anak Teknik Informatika gitu wkwkwkw",
  "Walau pun Gak Bagus Kali ini Thank You yah udah mau kau picit wkwk",
  "Udah bosan kau picit tombol lanjut ini??",
  "Kalau udah bosan picit lah lanjut lagi soalnya masih ada aku ceritakan wkwkw",
  "Tapi Bohong wkwwkwkwkwk",
  "Gak dengggggggggggggggg",
  "Pokoknya terimakasih banyak yah hasian ku sudah baik sama ku , pokoknya kita selalu kah marsianju an yah biar kek lagu itu wkwk",
  "Sekali lagi maulate godang yah hasian ku semangat selalu dirimu yang les itu yah hasian kuu dan jangan lupa berdoa ",
  "Tuhan Yesus memberkati kita semua"
];

function nextStep() {
  const messageContainer = document.getElementById("messageContainer");
  const greeting = document.getElementById("greeting");
  
  // Hapus pesan sebelumnya
  messageContainer.innerHTML = "";

  // Tambahkan pesan baru
  const messageElement = document.createElement("p");
  messageElement.classList.add("message", "fade-in");
  messageElement.innerText = messages[currentStep];
  messageContainer.appendChild(messageElement);

  // Beri efek fade out pada judul
  greeting.classList.add("fade-out");

  // Naikkan step dan tunggu sebelum menampilkan pesan berikutnya
  currentStep++;
  setTimeout(() => {
    greeting.innerText = " ";
    greeting.classList.remove("fade-out");
    greeting.innerText = "Selamat Hari Anniversary!";
  }, 500);

  // Jika ini adalah pesan terakhir, lakukan beberapa tindakan tambahan
  if (currentStep === messages.length) {
    document.getElementById("nextButton").style.display = "none";
    startMusic(); // Panggil fungsi untuk memulai musik
  }
  if (currentStep === messages.length) {
    document.getElementById("nextButton").style.display = "none";
    document.getElementById("closeButton").style.display = "inline-block";
  }
}

function startMusic() {
  if (!musicStarted) { // Periksa apakah musik sudah dimulai sebelumnya
    document.getElementById("audio").play(); // Jika belum, mulai musik
    musicStarted = true; // Set status musik menjadi telah dimulai
  }
}
document.getElementById("nextButton").onclick = function() {
  if (currentStep === 0) {
    startMusic();
  }
  nextStep();
};
function closeOverlay() {
  window.close();
}
