document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform your login logic here
    alert('Username Recorded');
    alert('Password Recorded');
});
