function validateForm() {
  const emailInput = document.getElementById("email");
  const icon = document.getElementById("error-icon");

  if (emailInput.value.trim() === "") {
    document.querySelector("#error-message").textContent =
      "Pole nesmie byť prázdne!";
    form.classList.add("error-border");
    icon.classList.add("show-error");
    return false;
  }

  const emailRegex = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
  if (!emailRegex.test(emailInput.value)) {
    document.querySelector("#error-message").textContent =
      "Nesprávny formát e-mailovej adresy!";
    form.classList.add("error-border");
    icon.classList.add("show-error");
    return false;
  }

  return true;
}
