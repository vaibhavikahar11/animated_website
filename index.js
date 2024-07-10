


 
////////creating a responsive navbar///////

const heroSection = document.querySelector(".section-hero");


const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener('click', () => {
  headerElem.classList.toggle("active");
});
////////////////navbar section/////////////
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    //  console.log(ent);
    document.body.classList.add("sticky")
  },
  {
    root: null,
    threshold: 0,
  });



// observer.unobserver(heroSection);
// creating a portfolio component

const p_btns = document.querySelector('.p-btns');
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  p_btn.forEach((curElem) =>
    curElem.classList.remove("p-btn-active"));


  p_btn_clicked.classList.add("p-btn-active");
  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log("btn_num");

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  p_img_elem.forEach((curElem) => curElem.classList.add("p-image-not-active"));
  img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"))
});
//  swiper js code

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
     delay: 2500,
     disableOnInteraction: false
   }
  // mousewheel: true,
  //  keyboard: false,
});



///////////////scroll to bottom////////

const footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top></ion>`;

footerElem.after(scrollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });

};
    scrollElement.addEventListener("click", scrollTop);

///////smooth scrolling effects/////////
const portfolioSec = document.querySelector(".section-portfolio");
const contactSec = document.querySelector(".section-contact");


document.querySelector(".portfolio-link").addEventListener("click", () => {
  portfolioSec.scrollIntoView({ behavior: "smooth" });
});







//////////animate number section////////




const workSection = document.querySelector(".section-work-data");
const workObserver = new IntersectionObserver((entries, observer) => {
  const [entry] = entries[2];
  console.log(entry);

  if (entry.isInteresting== false) return;
  const counterNum = document.querySelectorAll(".counter-numbers");
  const speed = 100;
  counterNum.forEach((curElem) => {
    const updateNumber = () => {
      const targetNumber = parseInt(curElem.dataset.numbers);

      // console.log(targetNumber);

      const initialNum = parseInt(curElem.innerText);

      // console.log(initialNum);
  
      const incrementNumber = Math.trunc(targetNumber / speed);

      // console.log(incrementNumber);
  
  
      if (initialNum < targetNumber) {
        curElem.innerText = `${initialNum + incrementNumber}+`;
  
        setTimeout(updateNumber, 10);
      }
    };
  
  
    updateNumber();
  });
  observer.unobserver(workSection);
}
  , {
    root: null,
    threshold: 0,
  });

