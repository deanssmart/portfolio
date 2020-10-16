import DraggableArt from "./DraggableArt";

Promise.all([
]).then(() => {
    [...document.querySelectorAll('.img-wrap')].forEach((element) => new DraggableArt(element));
});



