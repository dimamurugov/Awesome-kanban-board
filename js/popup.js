class Popup {
    constructor(popup,formAdd, openButton, submitAddListForm) {
        this.popup = popup;
        this.openButton = openButton;
        this.submitAddListForm = submitAddListForm;
        this.form = formAdd;

        this.close = this.close.bind(this);
        this.open = this.open.bind(this); 
        this.submitForm = this.submitForm.bind(this);
    }

    open() {
        this.popup.classList.add('popup_is-opened');
    }

    close() {
        this.popup.classList.remove('popup_is-opened');
    }
    submitForm(event) {
        this.submitAddListForm(event);
    }
    setListeners() {
        this.popup.querySelector('.popup__close').addEventListener("click", this.close);
        this.openButton.addEventListener("click", this.open);
        this.form.addEventListener("submit", this.submitForm);
    }
}