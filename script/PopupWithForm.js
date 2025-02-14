import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this.handleFormSubmit = handleFormSubmit;
    this.formElement = this.popupSelector.querySelector("form");
  }
  _getInputValues() {
    let values = {};
    const inputList = this.formElement.querySelectorAll("input");
    inputList.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }
  setEventListeners() {
    super.setEventListeners();
    this.formElement.addEventListener("submit", () => {
      this.handleFormSubmit(this._getInputValues());
    });
  }
  close() {
    super.close();
    this.formElement.reset();
  }
}
