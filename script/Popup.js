export class Popup {
  constructor(popupSelector) {
    this.popupSelector = document.querySelector(popupSelector);
    this.btnClose = this.popupSelector.querySelector(".popup__btn-close");
    this.overlay = this.popupSelector.querySelector(".popup__overlay");
  }
  open() {
    this.popupSelector.classList.add("popup__show");
    document.addEventListener("keyup", this._handleEscClose.bind(this));
    this.setEventListeners();
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
    this.btnClose.addEventListener("click", () => {
      this.close();
    });
    this.overlay.addEventListener("click", () => {
      this.close();
    });
  }
}
