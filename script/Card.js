export class Card {
  constructor(data, { _id, owner, likes }, currentUser, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._currentUser = currentUser;
    this._owner = owner;
    this._likes = likes;
    this._id = _id;
    this._card = this._getTemplate();
    this.handleCardClick = handleCardClick;
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
  }
  _handleLike() {
    this._likeBtn.classList.toggle("card__btn-like-active");
  }
  _handleDelete() {
    this._card.remove();
  }

  _setListeners() {
    this._likeBtn.addEventListener("click", () => this._handleLike());
    this._deleteBtn.addEventListener("click", () => this._handleDelete());
    this._cardImage.addEventListener("click", () => this.handleCardClick());
  }

  generateCard() {
    this._setProperties();
    this._setListeners();
    return this._card;
  }
}
