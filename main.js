document.querySelectorAll(".questions__label").forEach((label) => {
  label.addEventListener("click", () => {
    const input = label.previousElementSibling;
    const paragraph = label.nextElementSibling;
    const isChecked = input.checked;

    if (!isChecked) {
      paragraph.style.maxHeight = paragraph.scrollHeight + "px";
      setTimeout(() => {
        paragraph.style.transition = "max-height 0.3s ease-out";
      }, 10);
    } else {
      paragraph.style.transition = "";
      paragraph.style.maxHeight = "0";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".header__link");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  let reviews = document.querySelectorAll(".reviews__item");
  let currentReview = 0;

  function showReview(index) {
    reviews[currentReview].classList.remove("active");

    setTimeout(function () {
      reviews[index].classList.add("active");
      currentReview = index;
    }, 500);
  }

  function nextReview() {
    let nextIndex = (currentReview + 1) % reviews.length;
    showReview(nextIndex);
  }

  reviews[currentReview].classList.add("active");

  setInterval(nextReview, 5000);
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.reviews__form');
    const successMessage = document.getElementById('successMessage');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      successMessage.style.opacity = '1'; 
  
      setTimeout(function() {
        successMessage.style.opacity = '0'; 
      }, 5000);
    });
  });
  