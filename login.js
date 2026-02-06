document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    
    if (username === 'admin' && password === 'password') {
        sessionStorage.setItem('username', username);
        window.location.href = 'dashboard.html';
    } else {
        message.textContent = 'Invalid credentials';
        message.className = 'error';
    }
});
