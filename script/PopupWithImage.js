import { Popup } from "./Popup.js";
export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open(imageName, imageLink) {
    super.open();
    const popupImage = this.popupSelector.querySelector(".popup__img-full");
    const popupName = this.popupSelector.querySelector(".popup__img-name");
    popupImage.src = imageLink;
    popupImage.alt = imageName;
    popupName.textContent = imageName;
  }
  close() {
    super.close();
  }
}
