import { Card } from "./Card.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { UserInfo } from "./UserInfo.js";
const popupFullImg = document.querySelector("#popup__img");
const popupProfile = document.querySelector("#popup__profile");
const inputProfileName = document.querySelector("#input-name");
const inputProfileAbout = document.querySelector("#input-about");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const popupAdd = document.querySelector("#popup__add");

//handle Esc
function handleEsc(evt) {
  if (evt.key === "Escape") {
    popupFullImg.classList.remove("popup__show");
    popupAdd.classList.remove("popup__show");
    popupProfile.classList.remove("popup__show");
  }
}

//Save

const userInfo = new UserInfo(
  { nameSelector: profileName, aboutSelector: profileAbout },
  popupProfile
);
function getUserInfo() {
  const { name, about } = userInfo.getUserInfo();
  inputProfileName.value = name;
  inputProfileAbout.value = about;
}

function saveChanges() {
  userInfo.setUserInfo();
}
const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const createCard = (data) => {
  return new Card(data, () => {
    popupWithImg.open(data.title, data.link);
  }).generateCard();
};
const renderCard = (data, wrap) => {
  wrap.prepend(createCard(data));
};

const popupWithImg = new PopupWithImage("#popup__img");
popupWithImg.setEventListeners();

export {
  handleEsc,
  saveChanges,
  validationSettings,
  renderCard,
  popupWithImg,
  getUserInfo,
};
