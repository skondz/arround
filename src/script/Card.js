import { api } from "./Api.js";
export class Card {
  constructor(
    data,
    currentUser,
    handleCardClick,
    handleLikeCard,
    handleCardDelete
  ) {
    this._name = data.name;
    this._link = data.link;
    this._currentUser = currentUser;
    this._owner = data.owner;
    this._isLiked = data.isLiked;
    this._id = data._id;
    this._likes = data.likes;
    this._card = this._getTemplate();
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleLikeCard = handleLikeCard;
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
    this._cardImage.src = this._link;
    this._cardImage.name = this._name;
    this._cardname.textContent = this._name;
    if (this._isLiked) {
      this._likeBtn.classList.toggle("card__btn-like-active");
    }
    if (this._owner._id !== this._currentUser._id) {
      this._deleteBtn.style.display = "none";
    }
  }
  _handleLike() {
    const isLiked = this._likeBtn.classList.contains("card__btn-like-active");
    api.likeCard(this._id, isLiked).then(() => {
      console.log(this._likeBtn.classList.contains("card__btn-like-active"));
      this._likeBtn.classList.toggle("card__btn-like-active", !isLiked);
    });
  }
  _handleDelete() {
    this._card.remove();
  }
  _setListeners() {
    this._likeBtn.addEventListener("click", () => this._handleLike());

    this._deleteBtn.addEventListener("click", () =>
      this._handleCardDelete(this)
    );
    this._cardImage.addEventListener("click", () => this._handleCardClick());
  }

  generateCard() {
    this._setProperties();
    this._setListeners();
    return this._card;
  }
}
