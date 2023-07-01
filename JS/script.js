let search_box= document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () =>{
    search_box.classList.toggle("active");
    shopCart.classList.remove("active");
    login.classList.remove("active");
    menu.classList.remove("active");
}
let shopCart = document.querySelector(".shopping-cart");
document.querySelector("#cart-btn").onclick = ()=> {
    shopCart.classList.toggle("active");
    search_box.classList.remove("active");
    login.classList.remove("active");
    menu.classList.remove("active");
}
let login = document.querySelector(".login-form");
document.querySelector("#login-btn").onclick = ()=> {
    login.classList.toggle("active");
    search_box.classList.remove("active");
    shopCart.classList.remove("active");
    menu.classList.remove("active");
}
let menu = document.querySelector(".navbar");
document.querySelector("#menu-btn").onclick = ()=> {
    menu.classList.toggle("active");
    search_box.classList.remove("active");
    shopCart.classList.remove("active");
    login.classList.remove("active");
    
}

window.onscroll=()=>{
    search_box.classList.remove("active");
    shopCart.classList.remove("active");
    login.classList.remove("active");
    menu.classList.remove("active");
}

var swiper = new Swiper(".product-slider", {
    // slidesPerView: 1,
    loop: true,
    rewind: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    spaceBetween: 10,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    breakpoints: {
      450: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });