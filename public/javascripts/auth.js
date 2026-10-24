// Show / hide password when the eye icon is clicked
document.querySelectorAll('.toggle-password').forEach(function (button) {
  button.addEventListener('click', function () {
    const input = document.getElementById(button.dataset.target);
    const isHidden = input.type === 'password';

    input.type = isHidden ? 'text' : 'password';
    button.classList.toggle('is-visible', isHidden);
  });
});

// Registration: check that both passwords match before sending the form
const confirmInput = document.getElementById('confirmPassword');
if (confirmInput) {
  confirmInput.form.addEventListener('submit', function (e) {
    const password = document.getElementById('password').value;
    if (password !== confirmInput.value) {
      e.preventDefault();
      alert('Passwords do not match');
    }
  });
}
