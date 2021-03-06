class List {
    constructor(data, getDataMock) {
        this.data = data;
        this.getDataMock = getDataMock;
        
        this.placeList = undefined;
        this.remove = this.remove.bind(this); 
        this.addTask = this.addTask.bind(this); 
        this.saveTask = this.saveTask.bind(this);
    }


    create() {
        const template = document.createElement("div");

        template.insertAdjacentHTML('beforeend', `    
        
        <div class="list">
            
        <div class="list__header-list">
            <h3 class="list__title"></h3>
            <img class="list__menu" src="images/ellipsis.svg" alt="">
        </div>
        <ul class="list__container-card"></ul>

        <button class="list__add-button"> Add card</button>
        </div>`);
        
        this.placeList = template.firstElementChild;

        this.removeButton = this.placeList.querySelector(".list__menu");
        this.buttonAddTask = this.placeList.querySelector(".list__add-button");
        this.placeCards = this.placeList.querySelector(".list__container-card");
        this.listTitle = this.placeList.querySelector(".list__title");
        this.listTitle.textContent = this.data.title;
        this.placeMenu = this.placeList.querySelector(".list__dropdown-content");
        
        //вставка в листы существующих заданий
        if (this.data.issues.length !== 0) {
            this.data.issues.forEach(item => {
                const tempTask = this._templateTask();
                const textCard = tempTask.querySelector('.list__text-task');
                textCard.textContent = item.name;
                this.placeCards.appendChild(tempTask);
            })
        }
        
        this.setListeners();

        return this.placeList
    }

    remove() {
        const selectList = this.placeList.closest('.list');
        selectList.remove();
        this.removeListernes();
        
        const nameList = this.listTitle.textContent;
        let data = this.getDataMock();
        const idList = data.indexOf(this._getObjDataMock(this.listTitle.textContent));
        
        
        data.splice(idList, 1);   
        
        
        localStorage.setItem('dataMock', JSON.stringify(data));

    }

    _templateTask(){
        const tempCard = document.createElement("div");
        tempCard.insertAdjacentHTML('beforeend', `    
        <li class="list__card">
             <p class="list__text-task"></p>
        </li>`);

        return tempCard.firstElementChild;
    }

    _getObjDataMock(nameObj) {
        return this.getDataMock().find(item => {
            return item.title === nameObj
        })
    }
    saveTask() {
        const textTask = this.inputTask.value;
        
        this.inputTask.removeEventListener("blur", this.saveTask);
        this.card.firstElementChild.remove();
        
        //Проверка пустое ли поле, если нет, то вывод информации
        if (textTask !== "" ) {
            this.card.insertAdjacentHTML('beforeend', `    
            <p class="list__text-task">${textTask}</p>`);            
            
            let obj = this.getDataMock().find(item => {
                return item.title === this.data.title
            })

            //объект нового задания для листа
            const taskObj = {
                id: `task${obj.issues.length + 1}`,
                name: `${textTask}`
            };
            obj.issues.push(taskObj);

            localStorage.setItem('dataMock',JSON.stringify(this.getDataMock()));

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