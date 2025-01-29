const popupProfile = document.querySelector("#popup__profile");
const btnOpenProfile = document.querySelector(".profile__btn-edit");
const btnCloseProfile = document.querySelector("#close-profile");
const btnCloseAdd = document.querySelector("#close-add");
const inputProfileName = document.querySelector("#input-name");
const inputProfileAbout = document.querySelector("#input-about");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const btnOpenAdd = document.querySelector(".profile__btn-add");
const popupAdd = document.querySelector("#popup__add");
const templateElement = document.querySelector(".template__card");
const album = document.querySelector(".cards");
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

//Open PopUp
function openPopUp() {
  popupProfile.classList.add("popup__show");
  inputProfileName.value = profileName.textContent;
  inputProfileAbout.value = profileAbout.textContent;
  document.addEventListener("keydown", handleEsc);
}
btnOpenProfile.addEventListener("click", openPopUp);
btnOpenAdd.addEventListener("click", () => {
  popupAdd.classList.add("popup__show");
  document.addEventListener("keydown", handleEsc);
});

// Close PopUp
function handleEsc(evt) {
  if (evt.key === "Escape") {
    closeProfile();
    closeAdd();
  }
}
function closeProfile() {
  popupProfile.classList.remove("popup__show");
  document.removeEventListener("keydown", handleEsc);
}

function closeAdd() {
  popupAdd.classList.remove("popup__show");
  document.removeEventListener("keydown", handleEsc);
}

btnCloseProfile.addEventListener("click", closeProfile);
btnCloseAdd.addEventListener("click", closeAdd);

//Handle Submit Profile
function handleSaveChanges(evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileAbout.textContent = inputProfileAbout.value;
  closePopup();
}

popupProfile.addEventListener("submit", handleSaveChanges);

//Crear Cartas

function createCard(name, link) {
  const card = templateElement.cloneNode(true).content.querySelector(".card");
  const cardImage = card.querySelector(".card__image");
  const cardname = card.querySelector(".card__text");
  cardImage.src = link;
  cardname.textContent = name;
  return card;
}

initialCards.forEach(function (card) {
  const newCard = createCard(card.name, card.link);
  album.append(newCard);
});
