function validate() {
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let msg = document.getElementById("msg");
    msg.style.color = 'red'; // Set error message color

    // Clear previous messages
    msg.textContent = '';

    let isValid = true;

    // Check if both fields are empty
    if (username === '' && password === '') {
        msg.textContent = 'Username and Password are required.';
        isValid = false;
    } 
    // Check if username is empty
    else if (username === '') {
        msg.textContent = 'Username is required.';
        isValid = false;
    } 
    // Check if password is empty
    else if (password === '') {
        msg.textContent = 'Password is required.';
        isValid = false;
    }
    // Check if password length is less than 6
    else if (password.length < 6) {
        msg.textContent = 'Password must be at least 6 characters long.';
        isValid = false;
    }
    // If all checks pass
    if (isValid) {
        msg.style.color = 'green';
        msg.textContent = 'Login Successful';
    }

    // Prevent form submission if validation fails
    return isValid;
}
