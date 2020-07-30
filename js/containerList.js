class ContainerList {
    constructor(container, _createList) {
        this.container = container;
        
        this._createList = _createList;
    }

    addList(element) {
        const theFirstChild = this.container.firstChild;
        this.container.insertBefore(element, theFirstChild);
    }
    addDataMockObj(massObj) {
        massObj.reverse().forEach(item => {
            localStorage.setItem(item.title, JSON.stringify(item));
        });
    }

    render() {

        let keys = Object.keys(localStorage);
        
        for(let key of keys) {
            let tempJson = localStorage.getItem(key); 
            let tempObj = JSON.parse(tempJson);
            
            const newList = this._createList(tempObj);
            this.addList(newList);
        }
    }
}