import { FormValidator } from "./FormValidator.js";
import { validationSettings, saveChanges, renderCard } from "./utils.js";
import { PopupWithForm } from "./PopupWithForm.js";
const popupProfile = document.querySelector("#popup__profile");
const btnOpenProfile = document.querySelector(".profile__btn-edit");
const btnOpenAdd = document.querySelector(".profile__btn-add");
const popupAdd = document.querySelector("#popup__add");
const album = document.querySelector(".cards");
const inputProfileName = document.querySelector("#input-name");
const inputProfileAbout = document.querySelector("#input-about");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

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
const openPopupProfile = new PopupWithForm("#popup__profile", (values) =>
  saveChanges(values)
);
btnOpenProfile.addEventListener("click", () => {
  openPopupProfile.open();
  inputProfileName.value = profileName.textContent;
  inputProfileAbout.value = profileAbout.textContent;
});
openPopupProfile.setEventListeners();
//Open Add Popup
const openPopupAdd = new PopupWithForm("#popup__add", (values) =>
  renderCard(values, album)
);
btnOpenAdd.addEventListener("click", () => {
  openPopupAdd.open();
});
openPopupAdd.setEventListeners();
// Initial Cards
initialCards.forEach((card) => renderCard(card, album));

//Validate
const validateProfile = new FormValidator(popupProfile, validationSettings);
const validateAdd = new FormValidator(popupAdd, validationSettings);

validateProfile.enableValidation();
validateAdd.enableValidation();
