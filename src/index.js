import "./styles/main.scss";

/* ----------------Modal Counter----------------*/
const modalCounter = document.getElementById("modal-counter");

/* ----------------Manage modals----------------*/
const manageModals = () => {
  // Create a random id to locate each modal
  const id = Math.floor(Math.random() * 100);

  // Select container and modal template from DOM
  const container = document.getElementById("modal-container");
  const template = document.getElementById("template");

  // Clone the modal template & append with unique id
  const modal = template.cloneNode(true);
  modal.id = id;
  modal.classList.remove("overlay--hidden");

  //  Select continue/cancel button from DOM
  //  Append with unique id & add event listener
  const continueButton = modal.querySelector("#continue");
  continueButton.id = id;
  continueButton.addEventListener("click", removeModal);

  const cancelButton = modal.querySelector("#cancel");
  cancelButton.id = id;
  cancelButton.addEventListener("click", removeModal);

  // Append overlay container with new modal
  container.appendChild(modal);

  // Count the number of modals on page & update modal count text
  const numberOfModals = document.getElementsByClassName("modal").length - 1;
  modalCounter.innerText = `Modal Count: ${numberOfModals}`;
};

/* ----------------Remove modal function----------------*/
const removeModal = (event) => {
  const id = event.target.id;
  const modal = document.getElementById(id);
  modal.remove();

  // Decrement the count every time a modal is removed
  const numberOfModals = document.getElementsByClassName("modal").length - 1;
  modalCounter.innerText = `Modal Count: ${numberOfModals}`;
};

/* ----------------Add modal button----------------*/
const addModalButton = document.getElementById("add-modal");
addModalButton.addEventListener("click", manageModals);
