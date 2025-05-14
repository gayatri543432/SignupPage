// Regex patterns
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const mobnoRegex = /^\d{10}$/;

// Validate form on submit
function validateSignup(event) {
  event.preventDefault(); // prevent form from refreshing the page

  // Get form values
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const mobile = document.getElementById('signupMobile').value;
  const password = document.getElementById('signupPassword').value;
  const confirm = document.getElementById('signupConfirmPassword').value;
  const error = document.getElementById('signupError');
  error.textContent = ''; // clear error

  // Validations
  if (name.length < 2) {
    error.textContent = 'Enter your full name.';
    return false;
  }
  if (!emailRegex.test(email)) {
    error.textContent = 'Enter a valid email address.';
    return false;
  }
  if (!mobnoRegex.test(mobile)) {
    error.textContent = 'Mobile number must be exactly 10 digits.';
    return false;
  }
  if (!passwordRegex.test(password)) {
    error.textContent = 'Password must contain upper, lower, number & special character.';
    return false;
  }
  if (password !== confirm) {
    error.textContent = 'Passwords do not match.';
    return false;
  }

  // If all checks pass
  window.open("newPage.html", "_blank");
}

// Toggle password visibility
function togglePassword(id) {
  const field = document.getElementById(id);
  const icon = field.nextElementSibling;

  if (field.type === 'password') {
    field.type = 'text';
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  } else {
    field.type = 'password';
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  }
}
