//Константы
const placeList = document.querySelector('.container-list');
const openButtonPopup = document.querySelector('.header__button-new-list');
const popupAdd = document.querySelector('.popup');
const formAdd = document.querySelector('.popup__form');

//Колбэк функции
function _createList(data) {
    const newList = new List(data,getDataMock);
    return newList.create()
}
function getDataMock() {
    return containerList.getDataMock();
}

function submitAddListForm(event) {
    event.preventDefault();
    
    const data = {
        title: '',
        issues: []
    };
    data.title = this.form.elements.titleField.value;
    
    let dataMoct = getDataMock();
    dataMoct.push(data);

    localStorage.setItem('dataMock', JSON.stringify(dataMoct));

    const temp = _createList(data);
    containerList.addList(temp);

    this.close();
}

const containerList = new ContainerList(placeList, _createList);



//Проверка если localStorage пустой, то загружаются стандартные странички
if (localStorage.getItem('dataMock') === null) {
    containerList.addDataMockObj(dataMock);//Добавляем в localStorage стандартные 4 листа Backlog,Ready, inProgress, Finished
}
containerList.render();

const addListPopup = new Popup(popupAdd, formAdd, openButtonPopup, submitAddListForm);
addListPopup.setListeners();



