export class UserInfo {
  constructor({ nameSelector, aboutSelector }, popupSelector) {
    this._nameSelector = nameSelector;
    this._aboutSelector = aboutSelector;
    this._popupSelector = popupSelector;
  }

  getUserInfo() {
    return {
      name: this._nameSelector.textContent,
      about: this._aboutSelector.textContent,
    };
  }

  setUserInfo() {
    this._nameSelector.textContent =
      this._popupSelector.querySelector("#input-name").value;
    this._aboutSelector.textContent =
      this._popupSelector.querySelector("#input-about").value;
  }
}
