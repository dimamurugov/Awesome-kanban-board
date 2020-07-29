class List {
    constructor(data) {
        this.data = data;
    
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
        const placeListTitle = this.placeList.querySelector(".list__title");
        placeListTitle.textContent = this.data.title;
        
        return this.placeList
    }

    remove() {

    }
    
    setListeners() {
        //this.likeIcon.addEventListener("click", this.like);
  
    }
  
    removeListernes() {
        //this.likeIcon.removeEventListener("click", this.like);
  
    }
}