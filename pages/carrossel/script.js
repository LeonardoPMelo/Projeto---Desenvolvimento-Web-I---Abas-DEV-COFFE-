document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  if (!track) return;

  const slides = Array.from(track.children);
  const nextButton = document.querySelector(".carousel-button--right");
  const prevButton = document.querySelector(".carousel-button--left");
  const nav = document.querySelector(".carousel-nav");
  const dots = Array.from(nav.children);

  let currentSlideIndex = 0;
  let autoPlayInterval;

  const moveToSlide = (targetIndex) => {
    const amountToMove = targetIndex * 100;
    track.style.transform = `translateX(-${amountToMove}%)`;

    const currentDot = nav.querySelector(".current-slide");
    const targetDot = dots[targetIndex];

    if (currentDot) currentDot.classList.remove("current-slide");
    if (targetDot) targetDot.classList.add("current-slide");

    currentSlideIndex = targetIndex;
  };

  const showNextSlide = () => {
    const nextIndex = (currentSlideIndex + 1) % slides.length;
    moveToSlide(nextIndex);
  };

  const showPrevSlide = () => {
    const prevIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    moveToSlide(prevIndex);
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayInterval = setInterval(showNextSlide, 3000);
  };

  const stopAutoPlay = () => {
    if (autoPlayInterval) clearInterval(autoPlayInterval);
  };

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      stopAutoPlay();
      showNextSlide();
      startAutoPlay();
    });
  }

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      stopAutoPlay();
      showPrevSlide();
      startAutoPlay();
    });
  }

  if (nav) {
    nav.addEventListener("click", (e) => {
      const targetDot = e.target.closest("button");
      if (!targetDot) return;

      stopAutoPlay();
      const targetIndex = dots.findIndex((dot) => dot === targetDot);
      moveToSlide(targetIndex);
      startAutoPlay();
    });
  }

  startAutoPlay();
});
