import "./styles/main.scss";

/* ----------------Manage modals----------------*/
const manageModals = () => {
  // Create a random id to locate each modal
  const id = Math.floor(Math.random() * 100);

  // Select overlay container and modal template from DOM
  const overlay = document.getElementById("overlay");
  const modalTemplate = document.getElementById("modal-template");

  // Clone the modal template & append with unique id
  const modal = modalTemplate.cloneNode(true);
  modal.id = id;
  modal.classList.remove("hidden");

  //  Select continue/cancel button from DOM
  //  Append with unique id & add event listener
  const continueButton = modal.querySelector("#continue");
  continueButton.id = id;
  continueButton.addEventListener("click", removeModal);

  const cancelButton = modal.querySelector("#cancel");
  cancelButton.id = id;
  cancelButton.addEventListener("click", removeModal);

  // Append overlay container with new modal
  overlay.appendChild(modal);
};

/* ----------------Remove modal function----------------*/
const removeModal = (event) => {
  const id = event.target.id;
  const modal = document.getElementById(id);
  modal.remove();
};

/* ----------------Add modal button----------------*/
const addModalButton = document.getElementById("add-modal");
addModalButton.addEventListener("click", manageModals);
