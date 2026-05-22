

  const texts = [
    "Get Seen. Get Chosen.",
    "Look Serious. Get Customers.",
    "Stop Losing Customers."
  ];

  const typingSpeed = 50;
  const deletingSpeed = 60;
  const delayBetween = 2000;

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

  setInterval(autoSlide, 6000);


  const referralNotice = document.getElementById("referralNotice");
  const closeNotice = document.getElementById("closeNotice");
  setTimeout(() => {
    referralNotice.classList.add("show");
  }, 5500);

  closeNotice.addEventListener("click", () => {
    referralNotice.style.display = "none";
  });

  closeNotice.addEventListener("click", () => {
    referralNotice.style.display = "none";
  });


function sendReferralToWhatsApp(event) {
  event.preventDefault();

  const referrerName = document.getElementById("referrerName").value;
  const referrerEmail = document.getElementById("referrerEmail").value;
  const clientName = document.getElementById("clientName").value;
  const clientBusiness = document.getElementById("clientBusiness").value;
  const clientContact = document.getElementById("clientContact").value;

  const message = `Hello Temmie, I want to submit a referral:%0A
Referrer Name: ${referrerName}%0A
Referrer Email: ${referrerEmail}%0A
Client Name: ${clientName}%0A
Client Business: ${clientBusiness}%0A
Client Contact: ${clientContact}`;

  const phoneNumber = "2348027715673";

  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}

const mobileNav = document.querySelector(".bottom-nav");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const heroBottom = hero.offsetHeight;

  if (window.scrollY > heroBottom - 110) {
    mobileNav.classList.add("show");
  } else {
    mobileNav.classList.remove("show");
  }
});