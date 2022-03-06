// Toggle Menu
let menuBars = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menuBars.onclick = function () {
    this.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}


// Search Icone
document.querySelector("#search-icone").onclick = function () {
    document.querySelector("#search-form").classList.toggle("active");
};

document.querySelector("#close").onclick = function () {
    document.querySelector("#search-form").classList.toggle("active");
};


//swiper-wrapper
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

//   var swiper = new Swiper(".container", {
//     spaceBetween: 20,
//     centeredSlides: true,
//     autoplay: {
//       delay: 7500,
//       disableOnInteraction: false,
//     },
//     loop:true,
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//         },
//         640: {
//           slidesPerView: 2,
//         },
//         768: {
//           slidesPerView: 2,
//         },
//         1024: {
//           slidesPerView: 3,
//         },
//     },
//   });


// Add Loader Gif
function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  
  function fadeOut(){
    setInterval(loader, 3000);
  }
  
  window.onload = fadeOut;