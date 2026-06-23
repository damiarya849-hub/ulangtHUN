function tampilkanKejutan() {
    // Menampilkan gambar dan teks lucu
    document.getElementById("surpriseArea").classList.remove("hidden");
    
    // Mengubah judul dan pesan
    document.getElementById("title").innerText = "Yeay! Kamu dapat kejutan! 🥳";
    document.getElementById("message").innerText = "Semoga panjang umur dan sehat selalu ya!";
    
    // Menyembunyikan tombol pertama dan memunculkan tombol kedua
    document.getElementById("surpriseBtn").classList.add("hidden");
    document.getElementById("nextBtn").classList.remove("hidden");
}

function halamanSelanjutnya() {
    alert("Hayo... pencet ini artinya kamu harus traktir aku ya! 🍕");
    // Di sini Anda bisa mengarahkan ke halaman lain menggunakan:
    // window.location.href = "link-tujuan.html";
}