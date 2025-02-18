import { FormValidator } from "./FormValidator.js";
import { profileName, profileAbout } from "./const.js";
import {
  popupWithImg,
  getUserInfo,
  openPopupProfile,
  openPopupAdd,
} from "./utils.js";

import { Section } from "./Section.js";

import {
  popupProfile,
  btnOpenProfile,
  btnOpenAdd,
  popupAdd,
  validationSettings,
  profileAvatar,
} from "./const.js";
import { Card } from "./Card.js";
import { api } from "./Api.js";

//Iniciar page//

let currentUser;
//cargar perfil
api.getUserInfo().then((data) => {
  profileName.textContent = data.name;
  profileAbout.textContent = data.about;
  profileAvatar.src = data.avatar;
  currentUser = data._id;

  //cargar cartas

  api.getInitialCards().then((card) => {
    const section = new Section(
      {
        items: card,
        renderer: (item) => {
          const card = new Card(item, item, () => {
            popupWithImg.open(item.name, item.link);
          });
          const newCard = card.generateCard();
          section.addItem(newCard);
          console.log();
        },
      },
      ".cards"
    );
    section.renderItems();
  });
});

//instanciar class

//add event open
btnOpenProfile.addEventListener("click", () => {
  openPopupProfile.open();
  openPopupProfile.setEventListeners();
  getUserInfo();
  validateProfile.enableValidation();
});

//instanciar class

//add event open
btnOpenAdd.addEventListener("click", () => {
  openPopupAdd.open();
  openPopupAdd.setEventListeners();
  validateAdd.enableValidation();
});

//Validate
const validateProfile = new FormValidator(popupProfile, validationSettings);
const validateAdd = new FormValidator(popupAdd, validationSettings);
