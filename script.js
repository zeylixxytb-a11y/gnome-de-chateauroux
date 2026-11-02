
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");

function openDossier() {
    modalTitle.textContent = "DOSSIER GN-0001";
    modalText.textContent =
        "IDENTITÉ : LE GNOME DE CHÂTEAUROUX. STATUT : DIVINITÉ SUPRÊME. AUTORITÉ : ABSOLUE. MENACE : INCONNUE. NOTE : NE JAMAIS SOUS-ESTIMER LE GNOME.";
    modal.classList.add("active");
}

function openSecret() {
    modalTitle.textContent = "DOSSIER CHX-002";
    modalText.textContent =
        "CLASSIFICATION : ULTRA-SECRET. OBJET : CONTRÔLE DE CHÂTEAUROUX. CONCLUSION : LE GNOME EST DÉJÀ AU COURANT DE VOTRE CONSULTATION.";
    modal.classList.add("active");
}

function closeModal() {
    modal.classList.remove("active");
}

modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
