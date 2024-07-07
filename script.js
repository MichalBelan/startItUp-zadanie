function validateEmail() {
  var emailInput = document.getElementById('email');
  var loginButton = document.getElementById('loginButton');

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var isValidEmail = emailRegex.test(emailInput.value);

  if (!isValidEmail) {
      alert('Zadajte platný e-mail.');
      loginButton.disabled = true;
  } else {
      loginButton.disabled = false;
  }
}

function validateForm(event) {
  event.preventDefault();

  var emailInput = document.getElementById('email');
  var passwordInput = document.getElementById('password');

  // Validácia e-mailu
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var isValidEmail = emailRegex.test(emailInput.value);

  if (!isValidEmail) {
      alert('Zadajte platný e-mail.');
      return;
  }

  // Kontrola správnych prihlasovacích údajov
  var correctEmail = 'user@user321.sk';
  var correctPassword = 'user8heslo';

  if (emailInput.value === correctEmail && passwordInput.value === correctPassword) {
      // Vytvorenie cookie
      document.cookie = 'userLoggedIn=true';

      // Presmerovanie na Dashboard
      window.location.href = 'dashboard.html';
  } else {
      alert('Nesprávne prihlasovacie údaje.');
  }
}

// // Kontrola cookie pri načítaní stránky
// window.onload = function() {
//   var userLoggedIn = getCookie('userLoggedIn');

//   if (userLoggedIn) {
//       window.location.href = 'dashboard.html';
//   }
// };

// // Pomocná funkcia pre čítanie hodnôt z cookie
// function getCookie(name) {
//   var value = '; ' + document.cookie;
//   var parts = value.split('; ' + name + '=');

//   if (parts.length === 2) {
//       return parts.pop().split(';').shift();
//   }
// }
