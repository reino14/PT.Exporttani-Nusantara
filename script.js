// --------------------------HOME------------------------------
const images = ['main-bg/main-bg1.jpg', 'main-bg/main-bg2.jpg', 'main-bg/main-bg3.jpg'];

let currentIndex = 0;

function changeImage() {
  const imageElement = document.getElementById('current-image');

  // Ganti gambar
  currentIndex = (currentIndex + 1) % images.length;
  imageElement.src = images[currentIndex];

  // Panggil fungsi ini lagi setelah 8 detik
  setTimeout(changeImage, 14000);
}

// Panggil fungsi changeImage saat dokumen siap
document.addEventListener('DOMContentLoaded', () => {
  changeImage();
});

// --------------------------ACTIVITIES------------------------------
// JavaScript for Parallax Effect
const parallaxImage = document.getElementById('parallaxImage');

window.addEventListener('scroll', function () {
  const scrollPosition = window.pageYOffset;
  parallaxImage.style.backgroundPositionY = scrollPosition * 1.3 + 'px';
});

// --------------------------DATABASE FORM-------------------------------
const openModalButton = document.getElementById('openModal');
const closeModalButtons = [document.getElementById('closeModal')];
const modal = document.getElementById('registerModal');

openModalButton.addEventListener('click', () => {
  modal.classList.remove('hidden');
  modal.classList.add('active');
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('active');
  });
});

// Menutup modal jika pengguna mengklik di luar modal
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.classList.add('hidden');
    modal.classList.remove('active');
  }
});

// --------------------------DATABASE FORM1-------------------------------
const openModalButton1 = document.getElementById('openModal1');
const closeModalButtons1 = [document.getElementById('closeModal1')];
const modal1 = document.getElementById('registerModal1');

openModalButton1.addEventListener('click', () => {
  modal1.classList.remove('hidden');
  modal1.classList.add('active');
});

closeModalButtons1.forEach((button) => {
  button.addEventListener('click', () => {
    modal1.classList.add('hidden');
    modal1.classList.remove('active');
  });
});

// Menutup modal jika pengguna mengklik di luar modal
window.addEventListener('click', (event) => {
  if (event.target === modal1) {
    modal.classList.add('hidden');
    modal.classList.remove('active');
  }
});

// --------------------------DATABASE FORM3-------------------------------
const openModalButton2 = document.getElementById('openModal2');
const closeModalButtons2 = [document.getElementById('closeModal2')];
const modal2 = document.getElementById('registerModal2');

openModalButton2.addEventListener('click', () => {
  modal2.classList.remove('hidden');
  modal2.classList.add('active');
});

closeModalButtons2.forEach((button) => {
  button.addEventListener('click', () => {
    modal2.classList.add('hidden');
    modal2.classList.remove('active');
  });
});

// Menutup modal jika pengguna mengklik di luar modal
window.addEventListener('click', (event) => {
  if (event.target === modal2) {
    modal2.classList.add('hidden');
    modal2.classList.remove('active');
  }
});

// --------------------------DATABASE FORM4-------------------------------
const openModalButton3 = document.getElementById('openModal3');
const closeModalButtons3 = [document.getElementById('closeModal3')];
const modal3 = document.getElementById('registerModal3');

openModalButton3.addEventListener('click', () => {
  modal3.classList.remove('hidden');
  modal3.classList.add('active');
});

closeModalButtons3.forEach((button) => {
  button.addEventListener('click', () => {
    modal3.classList.add('hidden');
    modal3.classList.remove('active');
  });
});

// Menutup modal jika pengguna mengklik di luar modal
window.addEventListener('click', (event) => {
  if (event.target === modal3) {
    modal3.classList.add('hidden');
    modal3.classList.remove('active');
  }
});

