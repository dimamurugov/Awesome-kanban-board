class List {
    constructor(data) {
        this.data = data;
        
        this.placeList = undefined;
        this.remove = this.remove.bind(this); 
        this.bluuur = this.bluuur.bind(this);
    }

    //<input class = "list__input-title" type="text" placeholder="title" autofocus>

    // <li>
    // <p class="list__card">Карточка Один</p>
    // </li>

    create() {
        const template = document.createElement("div");

        template.insertAdjacentHTML('beforeend', `    
        
        <div class="list">
            
        <div class="list__header-list">
            <h3 class="list__title"></h3>
            <img class="list__menu" src="images/ellipsis.svg" alt="">
        </div>
        <ul class="list__container-card">
           
        </ul>

        <button class="list__add-button"> Add card</button>
        </div>`);
        
        this.placeList = template.firstElementChild;
        //const placeTitle = this.placeList.querySelector(".list__header-list");
        this.removeButton = this.placeList.querySelector(".list__menu");
        
        this.ListTitle = this.placeList.querySelector(".list__title");
        this.ListTitle.textContent = this.data.title;

        this.setListeners();

        return this.placeList
    }
    bluuur() {
        console.log('РАСФУКАСИРОВКА');
    }
    remove() {
        const selectList = this.placeList.closest('.list');
        selectList.remove();
        this.removeListernes();
        localStorage.removeItem(this.ListTitle.textContent)
    }
    
    setListeners() {
        this.removeButton.addEventListener("click", this.remove);
        // if (this.inputTitle !== undefined) {
        //     this.inputTitle.addEventListener("blur", this.bluuur);
        // }
    }
  
    removeListernes() {
        this.removeButton.removeEventListener("click", this.remove);
  
    }
}