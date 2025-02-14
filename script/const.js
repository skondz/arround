const popupProfile = document.querySelector("#popup__profile");
const btnOpenProfile = document.querySelector(".profile__btn-edit");
const btnSaveProfile = document.querySelector(".popup__btn-save");
const btnOpenAdd = document.querySelector(".profile__btn-add");
const popupAdd = document.querySelector("#popup__add");
const album = document.querySelector(".cards");

const popupFullImg = document.querySelector("#popup__img");
const inputProfileName = document.querySelector("#input-name");
const inputProfileAbout = document.querySelector("#input-about");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");

const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export {
  popupProfile,
  btnOpenProfile,
  btnOpenAdd,
  popupAdd,
  album,
  popupFullImg,
  inputProfileName,
  inputProfileAbout,
  profileName,
  profileAbout,
  validationSettings,
  btnSaveProfile,
};
