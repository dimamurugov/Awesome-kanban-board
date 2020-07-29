class ContainerList {
    constructor(container, _createList) {
        this.container = container;
        
        this._createList = _createList;
    }

    addList(element) {
        const theFirstChild = this.container.firstChild;
        this.container.insertBefore(element, theFirstChild);
    }

    render(massObj) {

        massObj.reverse().forEach(item => {
    
            localStorage.setItem(item.title, JSON.stringify(item));
            const newList = this._createList(item);
            this.addList(newList);
            
        });
        


    }
    setListeners() {
        //this.buttonAddList.addEventListener("click", this.);
  
    }
}