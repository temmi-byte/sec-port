

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

  const btn = document.getElementById("viewMoreBtn");
  const hiddenProjects = document.getElementById("hiddenProjects");

  btn.addEventListener("click", () => {
    if (hiddenProjects.style.display === "grid") {
      hiddenProjects.style.display = "none";
      btn.textContent = "View More Projects";
    } else {
      hiddenProjects.style.display = "grid";
      btn.textContent = "Show Less";
    }
  });



  const privacyPopup = document.getElementById("privacyPopup");
  const privacyCheck = document.getElementById("privacyCheck");

  if (localStorage.getItem("privacyAccepted") === "true") {
    privacyPopup.style.display = "none";
  }

  privacyCheck.addEventListener("change", function () {
    if (this.checked) {
      localStorage.setItem("privacyAccepted", "true");
      privacyPopup.style.display = "none";
    }
  });


  const referralNotice = document.getElementById("referralNotice");
  const closeNotice = document.getElementById("closeNotice");

  closeNotice.addEventListener("click", () => {
    referralNotice.style.display = "none";
  });

  function toggleReferralForm() {
    const form = document.getElementById("referralForm");

    if (form.style.display === "block") {
      form.style.display = "none";
    } else {
      form.style.display = "block";
    }
  }

function sendReferralToWhatsApp(event) {
  event.preventDefault();

  const referrerName = document.getElementById("referrerName").value;
  const referrerEmail = document.getElementById("referrerEmail").value;
  const clientName = document.getElementById("clientName").value;
  const clientBusiness = document.getElementById("clientBusiness").value;
  const clientContact = document.getElementById("clientContact").value;

  const message = `Hello, I want to submit a referral:%0A
Referrer Name: ${referrerName}%0A
Referrer Email: ${referrerEmail}%0A
Client Name: ${clientName}%0A
Client Business: ${clientBusiness}%0A
Client Contact: ${clientContact}`;

  const phoneNumber = "2348027715673";

  window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
}
