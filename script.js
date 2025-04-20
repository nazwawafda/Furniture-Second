// Logika Beli Sekarang
document.querySelectorAll('.buy-button').forEach((button) => {
  button.addEventListener('click', () => {
    const product = button.closest('.product');
    const paymentInfo = product.querySelector('.payment-info');
    const payButton = product.querySelector('.pay-button');
    const soldOutText = product.querySelector('.sold-out');

    // Pastikan produk belum terjual
    if (soldOutText && soldOutText.style.display === 'block') {
      alert('Produk ini sudah terjual.');
      return;
    }

    // Tampilkan informasi pembayaran
    paymentInfo.style.display = 'block';
    payButton.style.display = 'block';
  });
});

// Logika Sudah Bayar
document.querySelectorAll('.pay-button').forEach((button) => {
  button.addEventListener('click', () => {
    const product = button.closest('.product');
    const soldOutText = product.querySelector('.sold-out');
    const buyButton = product.querySelector('.buy-button');
    const paymentInfo = product.querySelector('.payment-info');

    const konfirmasi = confirm('Apakah kamu sudah transfer?');

    if (konfirmasi) {
      soldOutText.style.display = 'block';
      buyButton.innerText = 'Sold Out';
      buyButton.disabled = true;
      buyButton.style.backgroundColor = '#ccc';
      button.style.display = 'none';
      paymentInfo.style.display = 'none'; // Menyembunyikan info pembayaran setelah konfirmasi
    }
  });
});

// Menampilkan gambar produk dalam popup
document.querySelectorAll('.view-button').forEach(button => {
  button.addEventListener('click', function() {
    const images = this.getAttribute('data-images').split(',');
    const popupTitle = this.getAttribute('data-title');
    const popupDesc = this.getAttribute('data-desc');

    // Menampilkan judul dan deskripsi
    document.getElementById('popupTitle').innerText = popupTitle;
    document.getElementById('popupDesc').innerText = popupDesc;

    // Mengatur gambar untuk ditampilkan di dalam popup
    const popupImagesContainer = document.getElementById('popupImages');
    popupImagesContainer.innerHTML = ''; // Reset gambar sebelumnya
    images.forEach(imageSrc => {
      const img = document.createElement('img');
      img.src = imageSrc;
      img.alt = popupTitle;
      popupImagesContainer.appendChild(img);
    });

    // Menampilkan popup
    document.getElementById('popup').style.display = 'flex';
  });
});

// Menutup popup saat tombol close diklik
document.getElementById('closePopup').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});

// Menutup popup jika klik di luar area konten popup
window.addEventListener('click', function(event) {
  if (event.target === document.getElementById('popup')) {
    document.getElementById('popup').style.display = 'none';
  }
});
