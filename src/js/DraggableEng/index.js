import DraggableEng from "./DraggableEng";
// const imagesLoaded = require('imagesloaded');

// Preload images
// const preloadImages = () => {
//     return new Promise((resolve, reject) => {
//         imagesLoaded(document.querySelectorAll('.img-drag2, .img-trail2'), {background: true}, resolve);
//     });
// };

Promise.all([
    // preloadImages(),
]).then(() => {
    [...document.querySelectorAll('.img-wrap2')].forEach((element) => new DraggableEng(element));
    // document.body.classList.remove('loading2');
});



