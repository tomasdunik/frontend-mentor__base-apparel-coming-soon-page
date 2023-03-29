// const form = document.getElementById("form");
// const emailInput = document.getElementById("email");
// const errorMessage = document.getElementById("error-message");
// const icon = document.getElementById("error-icon");

// form.addEventListener("submit", function (event) {
//   if (emailInput.value === "") {
//     // errorMessage.classList.add("show-error");
//     document.querySelector("#error-message").textContent =
//       "Pole nesmie byť prázdne!";
//     form.classList.add("error-border");
//     icon.classList.add("show-error");
//     event.preventDefault();
//   } else if (emailInput.value !== "") {
//     // errorMessage.classList.remove("show-error");
//     document.querySelector("#error-message").textContent = "";
//     form.classList.remove("error-border");
//     icon.classList.remove("show-error");
//     event.preventDefault();
//   }
// });

const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //Metóda preventDefault() v JavaScripte sa používa na zastavenie predvoleného správania pre určitú udalosť v prehliadači. Metóda preventDefault() vracia boolean hodnotu, ktorá hovorí, či sa predvolené správanie pre udalosť podarilo zastaviť alebo nie. Ak je vrátená hodnota true, predvolené správanie sa zastavilo, ak je vrátená hodnota false alebo metóda nie je volaná vôbec, predvolené správanie sa uskutoční.

  checkInputs();
});

function checkInputs() {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setErrorFor(email, "Prosím, vložte Vašu e-mailovú adresu!");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Prosím, skontrolujte Vašu e-mailovú adresu!");
  } else {
    setSuccessFor(email);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const p = formControl.querySelector(".error-message");

  p.innerText = message;

  formControl.className = "form-control error";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
