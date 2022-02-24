// swiper
const swiper = new Swiper(".swiper", {
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2,
    },
  },
  slidesPerView: 1,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  autoplay: {
    delay: 2500,
  },
});

// nav scroll
window.addEventListener("scroll", scrollEvent);
const header = document.querySelector("header");
const menu = document.querySelector(".menu");
function scrollEvent() {
  if (window.scrollY > 100) {
    header.style.backgroundColor = "rgb(7, 28, 51)";
    menu.style.marginBlockStart = "0.5em";
    menu.style.marginBlockEnd = "0.5em";
  } else {
    header.style.backgroundColor = "rgba(7, 28, 51,0.8)";
    menu.style.marginBlockStart = "1em";
    menu.style.marginBlockEnd = "1em";
  }
}

// counter1
const counters = document.querySelectorAll(".counter");
const speed = 200;
counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const inc = Math.ceil(target / speed);
    if (count < target) {
      counter.innerText = count + inc;
      setTimeout(updateCount, 30);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});
// counter2
const counters2 = document.querySelectorAll(".counter2");
const speed2 = 100;
counters2.forEach((counter) => {
  const updateCount2 = () => {
    const num = +counter.getAttribute("data-num");
    const count2 = +counter.innerText;
    const inc = Math.ceil(num / speed2);
    if (count2 < num) {
      counter.innerText = count2 + inc;
      setTimeout(updateCount2, 10);
    } else {
      count2.innerText = num;
    }
  };
  updateCount2();
});
