import { FormValidator } from "./FormValidator.js";
import { Section } from "./Section.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { Card } from "./Card.js";
import { api } from "./Api.js";
import {
  popupProfile,
  btnOpenProfile,
  btnOpenAdd,
  popupAdd,
  validationSettings,
  profileAvatar,
  inputProfileName,
  inputProfileAbout,
  profileName,
  profileAbout,
  btnSaveProfile,
  btnCreateAdd,
  album,
  inputAddLink,
  inputAddName,
  inputProfileAvatar,
  btnSaveAvatar,
  popupAvatar,
  btnOpenAvatar,
} from "./utils.js";

//Iniciar page//
//cargar perfil
let currentUser;
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
          const card = new Card(
            item,
            currentUser,
            () => {
              popupWithImg.open(item.name, item.link);
            },
            handleLikeCard,
            handleCardDelete
          );
          const newCard = card.generateCard();
          section.addItem(newCard);
        },
      },
      ".cards"
    );
    section.renderItems();
  });
});

//Instanciar

// popups

//profile
const openPopupProfile = new PopupWithForm("#popup__profile", updateUser);

//add
const openPopupAdd = new PopupWithForm("#popup__add", (values) =>
  newCard(values)
);

//Avatar
export const openPopupAvatar = new PopupWithForm(
  "#popup__avatar",
  updateAvatar
);

//Image
const popupWithImg = new PopupWithImage("#popup__img");
popupWithImg.setEventListeners();
//Validate
const validateProfile = new FormValidator(popupProfile, validationSettings);
const validateAdd = new FormValidator(popupAdd, validationSettings);
const validateAvatar = new FormValidator(popupAvatar, validationSettings);

//open popup add
btnOpenAdd.addEventListener("click", () => {
  openPopupAdd.open();
  openPopupAdd.setEventListeners();
  validateAdd.enableValidation();
});

//open popup profile
btnOpenProfile.addEventListener("click", () => {
  openPopupProfile.open();
  openPopupProfile.setEventListeners();
  getUserInfo();
  validateProfile.enableValidation();
});
function getUserInfo() {
  api.getUserInfo().then((data) => {
    inputProfileName.value = data.name;
    inputProfileAbout.value = data.about;
  });
}

//open popup avatar
btnOpenAvatar.addEventListener("click", () => {
  openPopupAvatar.open();
  openPopupAvatar.setEventListeners();
  validateAvatar.enableValidation();
});

//Guardar Info
function updateAvatar() {
  const newAvatar = inputProfileAvatar.value;
  btnSaveAvatar.textContent = "Guardando...";
  api
    .updateUserAvatar(newAvatar)
    .then((data) => {
      profileAvatar.src = data.avatar;
    })
    .catch((err) => {
      console.log("Error", err);
    })
    .finally(() => {
      btnSaveAvatar.textContent = "Guardar";
      openPopupAvatar.close();
    });
}

function updateUser() {
  const newName = inputProfileName.value;
  const newAbout = inputProfileAbout.value;
  btnSaveProfile.textContent = "Guardando...";

  api
    .updateUserInfo(newName, newAbout)
    .then((data) => {
      console.log(data);
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

//Crear Cartas//

//Instanciar class
const createCard = (data) => {
  return new Card(
    data,
    currentUser,
    () => {
      popupWithImg.open(data.name, data.link);
    },
    handleLikeCard,
    handleCardDelete
  ).generateCard();
};

//renderizar
const renderCard = (data, wrap) => {
  wrap.prepend(createCard(data));
};

function newCard() {
  btnCreateAdd.textContent = "Guardando...";
  api
    .getNewCard(inputAddName.value, inputAddLink.value)
    .then((cardData) => {
      renderCard(cardData, album);
    })
    .finally(() => {
      btnCreateAdd.textContent = "Guardar";
      openPopupAdd.close();
    });
}
//Eliminar Cartas
function handleCardDelete(cardId, callback) {
  return api.deleteCard(cardId).then(() => {
    callback;
  });
}

function handleLikeCard(card) {
  return api.likeCard(card._id, card._isLiked).then((update) => {
    console.log("hola");
  });
}
