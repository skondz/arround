import { handleEsc } from "./utils.js";
export class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
    this._card = this._getTemplate();
  }
  _getTemplate() {
    return document
      .querySelector(".template__card")
      .content.querySelector(".card")
      .cloneNode(true);
  }
  _setProperties() {
    this._cardImage = this._card.querySelector(".card__image");
    this._cardname = this._card.querySelector(".card__text");
    this._likeBtn = this._card.querySelector(".card__btn-like");
    this._deleteBtn = this._card.querySelector(".card__btn-delete");
    this._popupFullImg = document.querySelector("#popup__img");
    this._popupImage = this._popupFullImg.querySelector(".popup__img-full");
    this._popupName = this._popupFullImg.querySelector(".popup__img-name");
    this._closeBtn = this._popupFullImg.querySelector("#close-img");
    this._cardImage.src = this._link;
    this._cardImage.name = this._name;
    this._cardname.textContent = this._name;
  }
  _handleLike() {
    this._likeBtn.classList.toggle("card__btn-like-active");
  }
  _handleDelete() {
    this._card.remove();
  }
  _close() {
    this._popupFullImg.classList.remove("popup__show");
    document.removeEventListener("keydown", () => this._handleEscClose);
  }

  _setListeners() {
    this._likeBtn.addEventListener("click", () => this._handleLike());
    this._deleteBtn.addEventListener("click", () => this._handleDelete());
    this._cardImage.addEventListener("click", () => this._setPopup());
  }
  _setPopup() {
    this._popupImage.src = this._link;
    this._popupImage.alt = this._name;
    this._popupName.textContent = this._name;
    this._popupFullImg.classList.add("popup__show");
    this._closeBtn.addEventListener("click", () => this._close());
    document.addEventListener("keydown", handleEsc);
  }
  generateCard() {
    this._setProperties();
    this._setListeners();
    return this._card;
  }
}
