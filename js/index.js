//Константы
const placeList = document.querySelector('.container-list');
const buttonAddList = document.querySelector('.header__button-new-list');

//Колбэк функции
function _createList(data) {
    const newList = new List(data);
    return newList.create()
}

function addNewList() {
    const temp = _createList();
    return containerList.addList(temp);
}



const containerList = new ContainerList(placeList, buttonAddList, _createList);
containerList.setListeners();
containerList.render(dataMock);



//Слушатели 
buttonAddList.addEventListener("click", addNewList);