function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.querySelector(".slides");
  slideIndex++;
  slides.style.transform = `translateX(-${(slideIndex % slides.children.length) * 100}%)`;
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function plusSlides(n) {
  const slides = document.querySelector(".slides");
  slideIndex += n;
  slides.style.transform = `translateX(-${(slideIndex % slides.children.length) * 100}%)`;
}

// faqs js

function toggleAnswer(question) {
  const answer = question.nextElementSibling;
  const arrow = question.querySelector('.arrow');
  if (answer.style.maxHeight) {
    answer.style.maxHeight = null;
    arrow.classList.remove('up');
  } else {
    answer.style.maxHeight = answer.scrollHeight + 'px';
    arrow.classList.add('up');
  }
}