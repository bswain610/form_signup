 const form = document.getElementById('userForm');
    const storedName = document.getElementById('storedName');
    const storedEmail = document.getElementById('storedEmail');
    const storepsw = document.getElementById('storepsw');

    // Load from localStorage on page load
    window.onload = () => {
      const name = localStorage.getItem('name');
      const email = localStorage.getItem('email');
      const psw = localStorage.getItem('psw');
      if (name && email && psw) {
        storedName.textContent = name;
        storedEmail.textContent = email;
        storepsw.textContent = psw;
      }
    };

    // Save form data to localStorage
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const psw = document.getElementById('psw').value;

      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      localStorage.setItem('psw', psw);

      storedName.textContent = name;
      storedEmail.textContent = email;
      storepsw.textContent = psw;

      form.reset(); // Clear form fields
    });