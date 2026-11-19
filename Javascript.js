
const guestForm = document.getElementById("guest-form");

const fullName = document.getElementById("name");
const message = document.getElementById("message");

const messageList = document.getElementById("messageList");
const emptyMessage = document.getElementById("emptyMessage");

guestForm.addEventListener("submit", function(event) {

    // Mencegah halaman refresh
    event.preventDefault();

    // Mengambil value input
    const nameValue = fullName.value.trim();
    const messageValue = message.value.trim();

    // Membuat elemen li
    const listItem = document.createElement("li");
    listItem.className = "col";

    // Membuat card
    const card = document.createElement("div");
    card.className = "card shadow-sm h-100";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    // Membuat nama
    const nameElement = document.createElement("h6");
    nameElement.className = "text-primary";
    nameElement.textContent = nameValue;

    // Membuat pesan
    const messageElement = document.createElement("p");
    messageElement.className = "mb-0";
    messageElement.textContent = messageValue;

    // Menyusun elemen
    cardBody.appendChild(nameElement);
    cardBody.appendChild(messageElement);

    card.appendChild(cardBody);
    listItem.appendChild(card);

    // Menambahkan pesan ke daftar
    messageList.appendChild(listItem);

    // Menghilangkan tulisan No new messages yet
    emptyMessage.style.display = "none";

    // Mengosongkan form
    guestForm.reset();

});
