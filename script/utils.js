import { Card } from "./Card.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import {
  inputProfileName,
  inputProfileAbout,
  profileName,
  profileAbout,
  btnSaveProfile,
  btnCreateAdd,
  album,
  inputAddLink,
  inputAddName,
} from "./const.js";
import { api } from "./Api.js";
//Save profile//

//instanciar class

function getUserInfo() {
  api.getUserInfo().then((data) => {
    inputProfileName.value = data.name;
    inputProfileAbout.value = data.about;
  });
}

//Guardar Info

function saveChanges() {
  const newName = inputProfileName.value;
  const newAbout = inputProfileAbout.value;
  btnSaveProfile.textContent = "Guardando...";

  api
    .modifyUserInfo(newName, newAbout)
    .then((data) => {
      profileName.textContent = data.name;
      profileAbout.textContent = data.about;
    })
    .catch((err) => {
      console.log("Error", err);
    })
    .finally(() => {
      btnSaveProfile.textContent = "Guardar";
      openPopupProfile.close();
    });
}
const openPopupProfile = new PopupWithForm("#popup__profile", saveChanges);

//Crear Cartas//

//Instanciar class
const createCard = (data) => {
  return new Card(data, () => {
    popupWithImg.open(data.name, data.link);
  }).generateCard();
};

//renderizar
const renderCard = (data, wrap) => {
  wrap.prepend(createCard(data));
};

const openPopupAdd = new PopupWithForm("#popup__add", (values) =>
  newCard(values)
);

function newCard() {
  btnCreateAdd.textContent = "Guardando...";
  api
    .getNewCard(inputAddName.value, inputAddLink.value)
    .then((cardData) => {
      renderCard(cardData, album);
    })
    .catch((err) => {
      console.log("Error", err);
    })
    .finally(() => {
      btnCreateAdd.textContent = "Guardar";
      openPopupAdd.close();
    });
}

//instanciar popup image
const popupWithImg = new PopupWithImage("#popup__img");
popupWithImg.setEventListeners();

export { popupWithImg, getUserInfo, openPopupProfile, openPopupAdd };
