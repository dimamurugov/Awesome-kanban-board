class ContainerList {
    constructor(container, buttonAddList, _createList) {
        this.container = container;
        this.buttonAddList = buttonAddList;
        this._createList = _createList;
    }

    addList(element) {
        this.container.appendChild(element);
    }

    render(massObj) {

        massObj.forEach(item => {
    
            localStorage.setItem('item.title', JSON.stringify(item));
            const newList = this._createList(item);
            this.addList(newList);
        });
        


    }
    setListeners() {
        //this.buttonAddList.addEventListener("click", this.);
  
    }
}