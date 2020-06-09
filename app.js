const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelButton = document.querySelector("#btn-cancel");
const confirmButton = document.querySelector("#btn-confirm");
const expensesList = document.querySelector("#expenses-list");
const totalExpensesOutput = document.querySelector("#total-expenses");

let totalExpenses = 0;
const clear = () => {
  reasonInput.value = "";
  amountInput.value = "";
}

confirmButton.addEventListener("click", () => {
  console.log("It works!");
  const reason = reasonInput.value;
  const amount = amountInput.value;
  if(!reason.trim().length || amount <= 0 || !amount.trim().length) {
    console.log("No value entered.")
    return;
  }
  const newItem = document.createElement("ion-item");
  newItem.textContent = `${reason}: $${amount}`;
  expensesList.appendChild(newItem);
  totalExpenses += +amount;
  totalExpensesOutput.textContent = `$${totalExpenses}`;
  clear();
});

cancelButton.addEventListener("click", clear);
