document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form1');
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const emailInput = document.querySelector('.input1[type="email"]');
      const passwordInput = document.querySelector('.input1[type="password"]');
      const email = emailInput.value;
      const password = passwordInput.value;
  
      const chamada = await fetch(URL);
      if (chamada.status === 200) {
        const usuarios = await chamada.json();
        const foundUser = usuarios.find(
          (usuario) => usuario.email === email && usuario.senha === password
        );
        if (foundUser) {
          form.action = "menuP.html";
          form.submit();
        } else {
          alert('Credenciais inválidas. Tente novamente.');
        }
      } else {
        // Tratar erro
      }
    });
  });
  