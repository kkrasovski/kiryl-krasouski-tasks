const listContainer = document.getElementById("rooms");
const addButton = document.querySelector(".container__add-button");
const body = document.querySelector("body");
const popUp = document.querySelector(".pop-up");

addButton.addEventListener("click", () => {
  addItem();
});

function drawList() {
  listContainer.innerHTML = "";

  for (key in JSON.parse(localStorage.dbRooms)) {
    const listItem = document.createElement("div");
    listItem.className = "list__single list-item";
    listItem.dataset.id = key;
    const listItemIcon = document.createElement("img");
    listItemIcon.className = "list-item__icon list-item__elem";
    listItemIcon.src = "assets/img/pocket.png";

    const listItemTitle = document.createElement("div");
    listItemTitle.className = "list-item__title list-item__elem";
    listItemTitle.innerText = `${JSON.parse(localStorage.dbRooms)[key].name}`;

    // const listItemPrice = document.createElement("div");
    // listItemPrice.className = "list-item__price list-item__elem";
    // listItemPrice.innerText = `${
    //   JSON.parse(localStorage.dbItems)[key].price
    // } BYN`;

    const listItemDelete = document.createElement("img");
    listItemDelete.className = "list-item__delete-icon list-item__elem";
    listItemDelete.src = "assets/img/delete.png";

    listItem.appendChild(listItemIcon);
    listItem.appendChild(listItemTitle);
    
    listItem.appendChild(listItemDelete);
    listContainer.appendChild(listItem);

    listItem.addEventListener("click", (e) => {
      showItem(e);
    });
    listItemDelete.addEventListener("click", (e) => {
      e.stopPropagation();
      deleteItem(e);
    });
  }
}

drawList();

function showItem(e) {
  // console.log(content[e.currentTarget.dataset.id])
  //console.log(JSON.parse(localStorage[e.currentTarget.dataset.id]))
}

function deleteItem(e) {
  let currentList = JSON.parse(localStorage.dbRooms);
  delete currentList[e.target.parentElement.dataset.id];
  localStorage.setItem("dbRooms", JSON.stringify(currentList));
  drawList();
}

function addItem() {

  const popUp = document.createElement("div");
  popUp.className = "pop-up";

  if (document.querySelector(".pop-up") == null) {
    body.appendChild(popUp);
  }
  
  // const popUpContainer = document.createElement("div");
  // popUpContainer.className = "pop-up__container";
  // popUp.appendChild(popUpContainer);

  // const input = document.createElement("div");
  // popUpContainer.className = "pop-up__container";
}




addButton.addEventListener("click", popUpHandler);



function popUpHandler() {
  console.log('клик')
  popUp.classList.toggle("pop-up_active");
}