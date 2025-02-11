import { FormValidator } from "./FormValidator.js";
import {
  validationSettings,
  saveChanges,
  renderCard,
  getUserInfo,
} from "./utils.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { Section } from "./Section.js";

const popupProfile = document.querySelector("#popup__profile");
const btnOpenProfile = document.querySelector(".profile__btn-edit");
const btnOpenAdd = document.querySelector(".profile__btn-add");
const popupAdd = document.querySelector("#popup__add");
const album = document.querySelector(".cards");

const initialCards = [
  {
    title: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    title: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    title: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    title: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    title: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    title: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

//Open profile Popup
const openPopupProfile = new PopupWithForm("#popup__profile", (values) =>
  saveChanges(values)
);
btnOpenProfile.addEventListener("click", () => {
  openPopupProfile.open();
  getUserInfo();
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
