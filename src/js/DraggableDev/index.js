import DraggableDev from "./DraggableDev";

Promise.all([]).then(() => {
    [...document.querySelectorAll('.img-wrap3')].forEach((element) => new DraggableDev(element));
});



