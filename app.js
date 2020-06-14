const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelButton = document.querySelector("#btn-cancel");
const confirmButton = document.querySelector("#btn-confirm");
const expensesList = document.querySelector("#expenses-list");
const totalExpensesOutput = document.querySelector("#total-expenses");
// const alertController = document.querySelector("ion-alert-controller");

let totalExpenses = 0;
const clear = () => {
  reasonInput.value = "";
  amountInput.value = "";
};

const presentAlert = () => {
  const alert = document.createElement("ion-alert");
  alert.cssClass = "my-custom-class";
  alert.header = "Error";
  alert.subHeader = "Invalid inputs";
  alert.message = "Please enter a valid reason and amount.";
  alert.buttons = ["OK"];

  document.body.appendChild(alert);
  return alert.present();
};

confirmButton.addEventListener("click", () => {
  const reason = reasonInput.value;
  const amount = amountInput.value;
  if (!reason.trim().length || amount <= 0 || !amount.trim().length) {
    return presentAlert();
  }
  const newItem = document.createElement("ion-item");
  newItem.textContent = `${reason}: $${amount}`;
  expensesList.appendChild(newItem);
  totalExpenses += +amount;
  totalExpensesOutput.textContent = `$${totalExpenses}`;
  clear();
});

cancelButton.addEventListener("click", clear);
