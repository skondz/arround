import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import {
  validationSettings,
  openProfile,
  openAdd,
  closeProfile,
  closeAdd,
  saveChanges,
} from "./utils.js";
const popupProfile = document.querySelector("#popup__profile");
const btnOpenProfile = document.querySelector(".profile__btn-edit");
const btnCloseProfile = document.querySelector("#close-profile");
const btnCloseAdd = document.querySelector("#close-add");
const btnOpenAdd = document.querySelector(".profile__btn-add");
const popupAdd = document.querySelector("#popup__add");
const album = document.querySelector(".cards");
const inputAddTitle = document.querySelector("#input-title");
const inputAddLink = document.querySelector("#input-link");
const popupFullImg = document.querySelector("#popup__img");
const popupOverlays = document.querySelectorAll(".popup__overlay");
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
//Open Popups
btnOpenProfile.addEventListener("click", openProfile);
btnOpenAdd.addEventListener("click", openAdd);
popupProfile.addEventListener("submit", saveChanges);
//Close Popups
btnCloseProfile.addEventListener("click", closeProfile);
btnCloseAdd.addEventListener("click", closeAdd);

// Initial Cards
initialCards.forEach(function (card) {
  const newCard = new Card(card.name, card.link);
  album.append(newCard.generateCard());
});
//new Cards
function addNewCard(evt) {
  const newCard = new Card(inputAddTitle.value, inputAddLink.value);
  evt.preventDefault();
  album.prepend(newCard.generateCard());
  closeAdd();
}
popupAdd.addEventListener("submit", addNewCard);

// overlay
popupOverlays.forEach((overlay) => {
  overlay.addEventListener("click", () => {
    popupAdd.classList.remove("popup__show");
    popupProfile.classList.remove("popup__show");
    popupFullImg.classList.remove("popup__show");
  });
});

//Validate
const validateProfile = new FormValidator(popupProfile, validationSettings);
const validateAdd = new FormValidator(popupAdd, validationSettings);

validateProfile.enableValidation();
validateAdd.enableValidation();
