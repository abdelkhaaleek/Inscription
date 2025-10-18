document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const birthdate = document.getElementById("birthdate").value;
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("message");

  if (!name || !email || !phone || !birthdate || !password) {
    message.style.color = "red";
    message.textContent = "Veuillez remplir tous les champs.";
    return;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    message.style.color = "red";
    message.textContent = "Le numéro doit contenir exactement 10 chiffres.";
    return;
  }

  if (password.length < 6) {
    message.style.color = "red";
    message.textContent = "Le mot de passe doit contenir au moins 6 caractères.";
    return;
  }

  message.style.color = "green";
  message.textContent = "Inscription réussie 🎉";

  console.log({ name, email, phone, birthdate, password });
});
