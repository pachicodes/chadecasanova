const gifts = [
  { id: 1, name: "Jogo de pratos" },
  { id: 2, name: "Conjunto de talheres" },
  { id: 3, name: "Panela de pressao" },
  { id: 4, name: "Liquidificador" },
  { id: 5, name: "Jogo de cama casal" },
  { id: 6, name: "Toalhas de banho" },
  { id: 7, name: "Aparelho de jantar" },
  { id: 8, name: "Cafeteira" }
];

const boughtIds = new Set();

const giftListElement = document.getElementById("gift-list");
const confirmDialog = document.getElementById("confirm-dialog");
const dialogMessage = document.getElementById("dialog-message");
const confirmButton = document.getElementById("confirm-button");

let selectedGiftId = null;

function renderList() {
  giftListElement.innerHTML = "";

  gifts.forEach((gift) => {
    const isBought = boughtIds.has(gift.id);

    const item = document.createElement("li");
    item.className = `gift-item${isBought ? " done" : ""}`;

    const info = document.createElement("div");

    const title = document.createElement("p");
    title.className = "gift-name";
    title.textContent = gift.name;

    const badge = document.createElement("span");
    badge.className = `badge ${isBought ? "done" : "available"}`;
    badge.textContent = isBought ? "Comprado" : "Disponivel";

    info.appendChild(title);
    info.appendChild(badge);

    const action = document.createElement("button");
    action.className = "btn btn-primary";
    action.type = "button";
    action.textContent = isBought ? "Ja comprado" : "Marcar como comprado";
    action.disabled = isBought;

    if (!isBought) {
      action.addEventListener("click", () => {
        selectedGiftId = gift.id;
        dialogMessage.textContent = `Tem certeza que deseja marcar \"${gift.name}\" como comprado?`;
        confirmDialog.showModal();
      });
    }

    item.appendChild(info);
    item.appendChild(action);
    giftListElement.appendChild(item);
  });
}

confirmButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (selectedGiftId === null) {
    confirmDialog.close();
    return;
  }

  boughtIds.add(selectedGiftId);
  selectedGiftId = null;
  confirmDialog.close();
  renderList();
});

confirmDialog.addEventListener("close", () => {
  selectedGiftId = null;
});

renderList();
