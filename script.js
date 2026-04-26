

  const texts = [
    "Designing conversion-ready websites",
    "Websites that look credible and sell",
    "Web2 & Web3 experiences",
    "Setup & maintainance of Google business profiles"
  ];

  const typingSpeed = 40;
  const deletingSpeed = 50;
  const delayBetween = 1500;

  const typingElement = document.getElementById("typing-text");

  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      typingElement.textContent = currentText.slice(0, charIndex++);
      if (charIndex > currentText.length) {
        setTimeout(() => isDeleting = true, delayBetween);
      }
    } else {
      typingElement.textContent = currentText.slice(0, charIndex--);
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }

    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
  }

  typeEffect();

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.opacity = '0';
  preloader.style.transition = 'opacity 5s ease';

  setTimeout(() => {
    preloader.style.display = 'none';
  }, 500); // match transition duration
});



const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});

// Get the modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("fullImage");
const captionText = document.getElementById("caption");
const closeModal = document.querySelector(".close-modal");

// Select all images in your project section
// (Adjust the selector '.project-card img' to match your actual HTML class)
const images = document.querySelectorAll(".project-card img");

images.forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        // Optional: Use the image's 'alt' text as a caption
        captionText.innerHTML = this.alt;
    }
});

// Close modal when clicking 'X'
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking anywhere outside the image
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}


  const slides = document.querySelectorAll(".testimonial-slide");
  const dots = document.querySelectorAll(".dot");

  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      dots[i].classList.remove("active");
    });

    slides[index].classList.add("active");
    dots[index].classList.add("active");
  }

  function autoSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  setInterval(autoSlide, 4000);


  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });