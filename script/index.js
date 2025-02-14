import { FormValidator } from "./FormValidator.js";

import {
  saveChanges,
  renderCard,
  popupWithImg,
  getUserInfo,
  setUserInfo,
} from "./utils.js";

import { PopupWithForm } from "./PopupWithForm.js";

import { Section } from "./Section.js";

import {
  popupProfile,
  btnOpenProfile,
  btnOpenAdd,
  popupAdd,
  album,
  initialCards,
  validationSettings,
} from "./const.js";
import { Card } from "./Card.js";

setUserInfo();
//Open profile Popup//

//instanciar class
const openPopupProfile = new PopupWithForm("#popup__profile", (values) =>
  saveChanges(values)
);

//add event open
btnOpenProfile.addEventListener("click", () => {
  openPopupProfile.open();
  getUserInfo();
});

//propiedades
openPopupProfile.setEventListeners();

//Open Add Popup//

//instanciar class
const openPopupAdd = new PopupWithForm("#popup__add", (values) =>
  renderCard(values, album)
);

//add event open
btnOpenAdd.addEventListener("click", () => {
  openPopupAdd.open();
});

//propiedades

openPopupAdd.setEventListeners();

// Initial Cards

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, () => {
        popupWithImg.open(item.name, item.link);
      });
      const newCard = card.generateCard();
      section.addItem(newCard);
    },
  },
  ".cards"
);
section.renderItems();
//Validate
const validateProfile = new FormValidator(popupProfile, validationSettings);
const validateAdd = new FormValidator(popupAdd, validationSettings);

validateProfile.enableValidation();
validateAdd.enableValidation();
