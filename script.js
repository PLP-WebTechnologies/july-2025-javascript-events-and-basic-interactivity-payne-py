// ========== THEME TOGGLE ==========
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent =
    document.body.classList.contains('dark-mode')
      ? 'Switch to Light Mode'
      : 'Switch to Dark Mode';
});

// ========== CLICK COUNTER ==========
let count = 0;
const countBtn = document.getElementById('countBtn');
const clickCount = document.getElementById('clickCount');

countBtn.addEventListener('click', () => {
  count++;
  clickCount.textContent = count;
});

// ========== COLLAPSIBLE FAQ ==========
const faqQuestion = document.querySelector('.faq-question');
const faqAnswer = document.querySelector('.faq-answer');

faqQuestion.addEventListener('click', () => {
  faqAnswer.classList.toggle('visible');
});

// ========== FORM VALIDATION ==========
const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const formSuccess = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form from submitting

  let isValid = true;

  // Clear previous messages
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  formSuccess.textContent = '';

  // Name validation
  if (nameInput.value.trim().length < 2) {
    nameError.textContent = 'Name must be at least 2 characters';
    isValid = false;
  }

  // Email validation using regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    emailError.textContent = 'Enter a valid email address';
    isValid = false;
  }

  // Password validation (at least 6 chars, 1 number)
  const passwordPattern = /^(?=.*\d).{6,}$/;
  if (!passwordPattern.test(passwordInput.value)) {
    passwordError.textContent =
      'Password must be at least 6 characters and contain a number';
    isValid = false;
  }

  if (isValid) {
    formSuccess.textContent = 'Form submitted successfully!';
    form.reset(); // Reset form
  }
});