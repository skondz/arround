import { FormValidator } from "./FormValidator.js";
import { profileName, profileAbout } from "./const.js";
import {
  renderCard,
  popupWithImg,
  getUserInfo,
  openPopupProfile,
} from "./utils.js";

import { PopupWithForm } from "./PopupWithForm.js";

import { Section } from "./Section.js";

import {
  popupProfile,
  btnOpenProfile,
  btnOpenAdd,
  popupAdd,
  album,
  validationSettings,
} from "./const.js";
import { Card } from "./Card.js";
import { api } from "./Api.js";

//Iniciar page//

//cargar perfil
api.getUserInfo().then((data) => {
  profileName.textContent = data.name;
  profileAbout.textContent = data.about;

  //cargar cartas

  api.getInitialCards().then((cards) => {
    const section = new Section(
      {
        items: cards,
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
  });
});
//Open profile Popup//

//instanciar class

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

//Validate
const validateProfile = new FormValidator(popupProfile, validationSettings);
const validateAdd = new FormValidator(popupAdd, validationSettings);

validateProfile.enableValidation();
validateAdd.enableValidation();
