import { Card } from "./Card.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { UserInfo } from "./UserInfo.js";
import {
  popupProfile,
  inputProfileName,
  inputProfileAbout,
  profileName,
  profileAbout,
} from "./const.js";
import { api } from "./Api.js";
//Save profile//

//instanciar class
const userInfo = new UserInfo(
  { nameSelector: profileName, aboutSelector: profileAbout },
  popupProfile
);
//obtener info
function setUserInfo() {
  api.getUserInfo().then((data) => {
    profileName.textContent = data.name;
    profileAbout.textContent = data.about;
  });
}
function getUserInfo() {
  api.getUserInfo().then((data) => {
    inputProfileName.value = data.name;
    inputProfileAbout.value = data.about;
  });
}

//Guardar Info
function saveChanges() {
  userInfo.setUserInfo();
}

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

export { saveChanges, renderCard, popupWithImg, getUserInfo, setUserInfo };
