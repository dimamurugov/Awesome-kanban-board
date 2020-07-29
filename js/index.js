//Константы
const placeList = document.querySelector('.container-list');
const openButtonPopup = document.querySelector('.header__button-new-list');
const popupAdd = document.querySelector('.popup');
const formAdd = document.querySelector('.popup__form');

//Колбэк функции
function _createList(data) {
    const newList = new List(data);
    return newList.create()
}
//Нужен? Потом разберусь
function layoutObj () {
    return {
        title: '',
        issues: [{
            id: '',
            name: ''
        }],
    }
}

function submitAddListForm(event) {
    event.preventDefault();
    
    const data = {};
    data.title = this.form.elements.titleField.value;
    
    const temp = _createList(data);
    containerList.addList(temp);
    
    localStorage.setItem(data.title, JSON.stringify(data));

    this.close();
}


const containerList = new ContainerList(placeList, _createList);
containerList.setListeners();
containerList.render(dataMock);

const addListPopup = new Popup(popupAdd, formAdd, openButtonPopup, submitAddListForm);
addListPopup.setListeners();



