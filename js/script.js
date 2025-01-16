/*Ini File JavaSricpt*/

// Animasi scroll navigation
document.querySelectorAll('nav a').forEach(anchor => {  
    anchor.addEventListener('click', function(e) {  
        e.preventDefault();  
  
        const targetId = this.getAttribute('href');  
        const targetElement = document.querySelector(targetId);  
        
        // Y Offsett 100px agar tidak tertutup header
        const offset = 100;  
        const elementPosition = targetElement.getBoundingClientRect().top;  
        const offsetPosition = elementPosition + window.pageYOffset - offset;  
        
        // Smooth scroll 
        window.scrollTo({  
            top: offsetPosition,  
            behavior: 'smooth'  
        });  
    });  
});  


//Banner Auto Slide
var slideIndex = 1;  
showDivs(slideIndex);  
  
function plusDivs(n) {  
    showDivs(slideIndex += n);  
}  
  
function showDivs(n) {  
    var i;  
    var x = document.getElementsByClassName("img-slideshow");  
    if (n > x.length) {slideIndex = 1}  
    if (n < 1) {slideIndex = x.length}  
    for (i = 0; i < x.length; i++) {  
        x[i].style.display = "none";  
    }  
    x[slideIndex - 1].style.display = "block";  
}  

setInterval(function() {  
    showDivs(slideIndex += 1);  
}, 4000); 



// Menunggu hingga halaman sepenuhnya dimuat
document.addEventListener("DOMContentLoaded", function () {
    // Mendapatkan elemen form dan tombol kirim
    const contactForm = document.querySelector(".contact-form");
    const submitButton = contactForm.querySelector("button[type='submit']");

    // Menangani pengiriman formulir
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah form untuk submit secara default (tanpa refresh halaman)

        // Mengambil data input dari form
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;

        // Validasi input (jika kosong, tampilkan peringatan)
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Simulasi pengiriman pesan dengan delay (misalnya mengirim data ke server)
        setTimeout(() => {
            // Setelah form berhasil "dikirim", tampilkan pesan konfirmasi
            alert(`Thank you, ${name}! Your message has been sent successfully.`);

            // Setelah pengiriman berhasil, reset form
            contactForm.reset();
        }, 1000); // Simulasi delay 1 detik sebelum konfirmasi

        // Menonaktifkan tombol kirim sementara selama pengiriman
        submitButton.disabled = true;
        submitButton.innerHTML = "Sending...";

        // Setelah delay selesai, aktifkan kembali tombol kirim
        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.innerHTML = "Send Message";
        }, 2000); // Menunggu 2 detik sebelum mengaktifkan kembali tombol kirim
    });
});