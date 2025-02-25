//Profile//
const popupProfile = document.querySelector("#popup__profile");
const btnOpenProfile = document.querySelector(".profile__btn-edit");
const btnSaveProfile = document.querySelector(".popup__btn-save");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const profileAvatar = document.querySelector(".profile__avatar");
const inputProfileName = document.querySelector("#input-name");
const inputProfileAbout = document.querySelector("#input-about");
const inputProfileAvatar = document.querySelector("#input-avatar");
const btnSaveAvatar = document.querySelector(".popup__btn-change");
const popupAvatar = document.querySelector("#popup__avatar");

//Add
const btnOpenAdd = document.querySelector(".profile__btn-add");
const popupAdd = document.querySelector("#popup__add");
const btnCreateAdd = document.querySelector(".popup__btn-create");
const inputAddName = document.querySelector("#input-title");
const inputAddLink = document.querySelector("#input-link");
const album = document.querySelector(".cards");

//Card
const popupFullImg = document.querySelector("#popup__img");

//validation
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
  btnCreateAdd,
  inputAddName,
  inputAddLink,
  profileAvatar,
  inputProfileAvatar,
  btnSaveAvatar,
  popupAvatar,
};
