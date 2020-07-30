class List {
    constructor(data) {
        this.data = data;
        
        this.placeList = undefined;
        this.remove = this.remove.bind(this); 
        this.addTask = this.addTask.bind(this); 

        this.saveTask = this.saveTask.bind(this);
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
        
        this.removeButton = this.placeList.querySelector(".list__menu");
        this.buttonAddTask = this.placeList.querySelector(".list__add-button");
        this.placeCards = this.placeList.querySelector(".list__container-card");
        this.listTitle = this.placeList.querySelector(".list__title");
        this.listTitle.textContent = this.data.title;

        this.setListeners();

        return this.placeList
    }
   
    remove() {
        const selectList = this.placeList.closest('.list');
        selectList.remove();
        this.removeListernes();
        localStorage.removeItem(this.listTitle.textContent)
    }
    saveTask() {
        const textTask = this.inputTask.value;
        this.inputTask.removeEventListener("blur", this.saveTask);
        this.card.firstElementChild.remove();

        if (textTask !== "" ) {
            this.card.insertAdjacentHTML('beforeend', `    
            <p class="list__text-task">${textTask}</p>`);


        } else {
            this.card.remove();
        }
        
        
        
    }
    addTask() {
        const tempCard = document.createElement("div");
        tempCard.insertAdjacentHTML('beforeend', `    
        <li class="list__card">
            <input class = "list__input-title" type="text" placeholder="write a task">
        </li>`);

        this.card = tempCard.firstElementChild;
        this.placeCards.appendChild(this.card);
        this.inputTask = this.placeList.querySelector('.list__input-title');
        
        this.inputTask.focus();
        
        this.inputTask.addEventListener("blur", this.saveTask);
        //Слушатель для сохранения задания по нажанитию Enter
        this.inputTask.addEventListener('keydown', (e) => {
            if (e.keyCode === 13) {
                this.saveTask();
            }
          });
    }
    
    setListeners() {
        this.removeButton.addEventListener("click", this.remove);
        this.buttonAddTask.addEventListener("click", this.addTask);
    }
  
    removeListernes() {
        this.removeButton.removeEventListener("click", this.remove);
    }
}