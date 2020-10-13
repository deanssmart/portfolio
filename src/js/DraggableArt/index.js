import DraggableArt from "./DraggableArt";
// const imagesLoaded = require('imagesloaded');

// // Preload images
// const preloadImages = () => {
//     return new Promise((resolve, reject) => {
//         imagesLoaded(document.querySelectorAll('.img-drag, .img-trail'), {background: true}, resolve);
//     });
// };

Promise.all([
    // preloadImages(),
]).then(() => {
    [...document.querySelectorAll('.img-wrap')].forEach((element) => new DraggableArt(element));
    // document.body.classList.remove('loading2');
});



