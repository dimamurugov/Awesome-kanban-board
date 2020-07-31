class ContainerList {
    constructor(container, _createList) {
        this.container = container;
        
        this._createList = _createList;
        
        const tempJson = localStorage.getItem('dataMock'); 
        this.dataMock = JSON.parse(tempJson);
    }
    getDataMock() {
        return this.dataMock
    }
    addList(element) {
        const theFirstChild = this.container.firstChild;
        this.container.insertBefore(element, theFirstChild);
    }
    addDataMockObj(massObj) {
        localStorage.setItem('dataMock', JSON.stringify(massObj));
    }

    render() {        
        this.dataMock.forEach(item => {            
            const newList = this._createList(item);
            this.addList(newList);
        });
    }
}