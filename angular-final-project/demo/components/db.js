let content = {
  1: {
    name: "лампочка",
    room: "спальная",
    price: 3,
    category: ["электрика", "расходники"],
    date: "Thu Jan 01 1970",
    comment: "куплен на распродаже",
  },
  2: {
    name: "ламинат",
    room: "спальная",
    price: 1030,
    category: ["электрика", "расходники"],
    date: "Thu Jan 01 1970",
    comment: "12мм Egger",
  },
  3: {
    name: "окно",
    room: "кухня",
    price: 650,
    category: ["окна/двери"],
    date: "Thu Jan 01 1970",
    comment: "3 камерное",
  },
};

let rooms = {
  1: {
    name: "кухня"
  },
  2: {
    name: "гостиная"
  },
  3: {
    name: "детская"
  },
  4: {
    name: "ванная"
  },
  6: {
    name: "туалет"
  },
}

let categories = {
  1: {
    name: "электрика"
  },
  2: {
    name: "смеси"
  },
  3: {
    name: "полы"
  },
  4: {
    name: "мебель"
  },
  5: {
    name: "лампочки"
  },
  5: {
    name: "плитка"
  },
}




if (!localStorage.hasOwnProperty("firstRun")) {
  localStorage.setItem("dbItems", JSON.stringify(content));
  localStorage.setItem("dbRooms", JSON.stringify(rooms));
  localStorage.setItem("categories", JSON.stringify(categories));
  localStorage.setItem("firstRun", "false");

 
}
