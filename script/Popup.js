export class Popup {
  constructor(popupSelector) {
    this.popupSelector = document.querySelector(popupSelector);
  }
  open() {
    this.popupSelector.classList.add("popup__show");
    document.addEventListener("keyup", this._handleEscClose.bind(this));
  }
  close() {
    this.popupSelector.classList.remove("popup__show");
    document.removeEventListener("keyup", this._handleEscClose.bind(this));
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  setEventListeners() {
    const btnClose = this.popupSelector.querySelector(".popup__btn-close");
    const overlay = this.popupSelector.querySelector(".popup__overlay");
    btnClose.addEventListener("click", () => {
      this.close();
    });
    overlay.addEventListener("click", () => {
      this.close();
    });
  }
}
