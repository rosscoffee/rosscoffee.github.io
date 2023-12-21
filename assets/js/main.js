let bar = document.querySelector(".bar");
let nav = document.querySelector(".navigation");
let body = document.querySelector("body");

// Fungsi untuk menutup navigasi jika diklik di luar area sidebar
function closeNavOutsideClick(event) {
    if (event.target !== bar && event.target.closest('.navigation') === null) {
        body.style.overflow = '';
        nav.style.left = "-100%";
        bar.src = "assets/images/others/menu.png";
        document.removeEventListener('click', closeNavOutsideClick);
    }
}

bar.onclick = () => {
    if (nav.style.left === "0%") {
        body.style.overflow = '';
        nav.style.left = "-100%";
        bar.src = "assets/images/others/menu.png";
    } else {
        body.style.overflow = 'hidden';
        nav.style.left = "0%";
        bar.src = "assets/images/others/x.png";
        // Menambahkan event listener untuk menutup navigasi saat klik di luar area sidebar
        document.addEventListener('click', closeNavOutsideClick);
    }
};


window.onload = ()=>{
    let homeContent = document.querySelector(".home-content");
    homeContent.style.left = "50px"
}










