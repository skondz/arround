const popupFullImg = document.querySelector("#popup__img");
const popupProfile = document.querySelector("#popup__profile");
const inputProfileName = document.querySelector("#input-name");
const inputProfileAbout = document.querySelector("#input-about");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const popupAdd = document.querySelector("#popup__add");
const inputAddTitle = document.querySelector("#input-title");
const inputAddLink = document.querySelector("#input-link");

//abrir
function handleEsc(evt) {
  if (evt.key === "Escape") {
    popupFullImg.classList.remove("popup__show");
    popupAdd.classList.remove("popup__show");
    popupProfile.classList.remove("popup__show");
  }
}

//close
function closeAdd() {
  inputAddLink.value = "";
  inputAddTitle.value = "";
  popupAdd.classList.remove("popup__show");
  document.removeEventListener("keydown", handleEsc);
}
//Save
function saveChanges(evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileAbout.textContent = inputProfileAbout.value;
}
const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export { handleEsc, closeAdd, saveChanges, validationSettings };
