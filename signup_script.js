const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Basic Validation (you should add more robust validation)
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return; 
    }

    // If validation passes, submit the form using a secure backend mechanism.
    // ... code to send data to your server ...
});




// Get all show-password icons
const showPasswordIcons = document.querySelectorAll('.show-password');

showPasswordIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        const passwordField = icon.previousElementSibling; // Get the password field
        const type = passwordField.getAttribute('type');

        if (type === "password") {
            passwordField.setAttribute('type', 'text');
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            passwordField.setAttribute('type', 'password');
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
});
