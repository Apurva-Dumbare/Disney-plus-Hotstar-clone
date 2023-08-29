const carousel = document.querySelector(".carousel");
const sliders = [...document.querySelectorAll(".slider")];
let currentIndex = 0;

function slideTo(index) {
  if (index >= sliders.length || index < 0) return;
  currentIndex = index;
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  slideTo(currentIndex + 1);
}

function prevSlide() {
  slideTo(currentIndex - 1);
}

setInterval(nextSlide, 3000);

document.querySelector(".prev-btn").addEventListener("click", prevSlide);
document.querySelector(".next-btn").addEventListener("click", nextSlide);

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
  item.addEventListener("mouseover", () => {
    let video = item.children[1];
    video.play();
  });
  item.addEventListener("mouseleave", () => {
    let video = item.children[1];
    video.pause();
  });
});

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBTns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtns[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth - 200;
  });

  preBTns[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth + 200;
  });
});
