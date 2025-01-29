const popupProfile = document.querySelector("#popup__profile");
const btnOpenProfile = document.querySelector(".profile__btn-edit");
const btnCloseProfile = document.querySelector("#close-profile");
const btnCloseAdd = document.querySelector("#close-add");
const inputProfileName = document.querySelector("#input-name");
const inputProfileAbout = document.querySelector("#input-about");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__about");
const btnOpenAdd = document.querySelector(".profile__btn-add");
const popupAdd = document.querySelector("#popup__add");

//Open PopUp
function openPopUp() {
  popupProfile.classList.add("popup__show");
  inputProfileName.value = profileName.textContent;
  inputProfileAbout.value = profileAbout.textContent;
}
btnOpenProfile.addEventListener("click", openPopUp);
btnOpenAdd.addEventListener("click", () => {
  popupAdd.classList.add("popup__show");
});

// Close PopUp
function closePopup() {
  popupProfile.classList.remove("popup__show");
  popupAdd.classList.remove("popup__show");
}
btnCloseProfile.addEventListener("click", closePopup);
btnCloseAdd.addEventListener("click", closePopup);

//Handle Submit Profile
function handleSaveChanges(evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileAbout.textContent = inputProfileAbout.value;
  closePopup();
}

popupProfile.addEventListener("submit", handleSaveChanges);
