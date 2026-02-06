document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    if (username === 'admin' && password === 'password') {
        message.textContent = 'Login successful!';
        message.className = 'success';
    } else {
        message.textContent = 'Invalid credentials';
        message.className = 'error';
    }
});
