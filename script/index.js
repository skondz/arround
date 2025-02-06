import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Popup } from "./Popup.js";
import { Section } from "./Section.js";
import { validationSettings, closeAdd, saveChanges } from "./utils.js";
const popupProfile = document.querySelector("#popup__profile");
const btnOpenProfile = document.querySelector(".profile__btn-edit");
const btnOpenAdd = document.querySelector(".profile__btn-add");
const popupAdd = document.querySelector("#popup__add");
const album = document.querySelector(".cards");
const inputAddTitle = document.querySelector("#input-title");
const inputAddLink = document.querySelector("#input-link");
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
//Open profile Popup
const openProfilePopup = new Popup("#popup__profile");
btnOpenProfile.addEventListener("click", () => {
  openProfilePopup.open();
});
//Open Add Popup
const openAddPopup = new Popup("#popup__add");
btnOpenAdd.addEventListener("click", () => {
  openAddPopup.open();
});

popupProfile.addEventListener("submit", saveChanges);

// Initial Cards
const defaultCards = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const { name, link } = item;
      const card = new Card(name, link);
      const cardElement = card.generateCard();
      defaultCards.addItem(cardElement);
    },
  },
  ".cards"
);
defaultCards.renderItems();

//new Cards
function addNewCard(evt) {
  const newCard = new Card(inputAddTitle.value, inputAddLink.value);
  evt.preventDefault();
  album.prepend(newCard.generateCard());
  closeAdd();
}
popupAdd.addEventListener("submit", addNewCard);

//Validate
const validateProfile = new FormValidator(popupProfile, validationSettings);
const validateAdd = new FormValidator(popupAdd, validationSettings);

validateProfile.enableValidation();
validateAdd.enableValidation();
