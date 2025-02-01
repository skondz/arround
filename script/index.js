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
const templateElement = document.querySelector(".template__card");
const album = document.querySelector(".cards");
const inputAddTitle = document.querySelector("#input-title");
const inputAddLink = document.querySelector("#input-link");
const popupFullImg = document.querySelector("#popup__img");
const btnCloseImg = document.querySelector("#close-img");
const formProfile = document.querySelector("#form-profile");
const popupOverlays = document.querySelectorAll(".popup__overlay");
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

//Open PopUp
function openPopUp() {
  popupProfile.classList.add("popup__show");
  inputProfileName.value = profileName.textContent;
  inputProfileAbout.value = profileAbout.textContent;
  document.addEventListener("keydown", handleEsc);
}
btnOpenProfile.addEventListener("click", openPopUp);
btnOpenAdd.addEventListener("click", () => {
  popupAdd.classList.add("popup__show");
  document.addEventListener("keydown", handleEsc);
});

// Close PopUp
function handleEsc(evt) {
  if (evt.key === "Escape") {
    closeProfile();
    closeAdd();
    closeImg();
  }
}
function closeProfile() {
  popupProfile.classList.remove("popup__show");
  document.removeEventListener("keydown", handleEsc);
}

function closeAdd() {
  inputAddLink.value = "";
  inputAddTitle.value = "";
  popupAdd.classList.remove("popup__show");
  document.removeEventListener("keydown", handleEsc);
}
function closeImg() {
  popupFullImg.classList.remove("popup__show");
  document.removeEventListener("keydown", handleEsc);
}

btnCloseProfile.addEventListener("click", closeProfile);
btnCloseAdd.addEventListener("click", closeAdd);

//Handle Submit Profile
function handleSaveChanges(evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileAbout.textContent = inputProfileAbout.value;
  closeProfile();
}

popupProfile.addEventListener("submit", handleSaveChanges);

//Crear Cartas

function createCard(name, link) {
  const card = templateElement.cloneNode(true).content.querySelector(".card");
  const cardImage = card.querySelector(".card__image");
  const cardname = card.querySelector(".card__text");
  const likeBtn = card.querySelector(".card__btn-like");
  const deleteBtn = card.querySelector(".card__btn-delete");
  const popupImage = document.querySelector(".popup__img-full");
  const popupName = document.querySelector(".popup__img-name");

  cardImage.src = link;
  cardImage.alt = name;
  cardname.textContent = name;

  //Like
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("card__btn-like-active");
  });

  //Delete
  deleteBtn.addEventListener("click", () => {
    card.remove();
  });

  //PopUp
  cardImage.addEventListener("click", () => {
    popupImage.src = cardImage.src;
    popupImage.alt = cardname.textContent;
    popupName.textContent = cardname.textContent;
    popupFullImg.classList.add("popup__show");
    btnCloseImg.addEventListener("click", closeImg);
    document.addEventListener("keydown", handleEsc);
  });

  return card;
}

initialCards.forEach(function (card) {
  const newCard = createCard(card.name, card.link);
  album.append(newCard);
});

function addNewCard(evt) {
  const newCard = createCard(inputAddTitle.value, inputAddLink.value);
  evt.preventDefault();
  album.prepend(newCard);

  closeAdd();
}
popupAdd.addEventListener("submit", addNewCard);

popupOverlays.forEach((overlay) => {
  overlay.addEventListener("click", () => {
    popupAdd.classList.remove("popup__show");
    popupProfile.classList.remove("popup__show");
    popupFullImg.classList.remove("popup__show");
  });
});
