import { Card } from "./Card.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import {
  inputProfileName,
  inputProfileAbout,
  profileName,
  profileAbout,
  btnSaveProfile,
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

function saveChangesApi(evt) {
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
const openPopupProfile = new PopupWithForm("#popup__profile", saveChangesApi);

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

//instanciar popup image
const popupWithImg = new PopupWithImage("#popup__img");
popupWithImg.setEventListeners();

export {
  renderCard,
  popupWithImg,
  getUserInfo,
  saveChangesApi,
  openPopupProfile,
};
