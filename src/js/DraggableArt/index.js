/**
* index.js
* http://www.codrops.com
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
* 
* Copyright 2020, Codrops
* http://www.codrops.com
*/
import DraggableArt from "./DraggableArt";
const imagesLoaded = require('imagesloaded');

// Preload images
const preloadImages = () => {
    return new Promise((resolve, reject) => {
        imagesLoaded(document.querySelectorAll('.img-drag2, .img-trail2'), {background: true}, resolve);
    });
};

// Preload fonts
// const preloadFonts = () => {
//     return new Promise((resolve, reject) => {
//         WebFont.load({
//             typekit: {
//                 id: 'wwn4ioo'
//             },
//             active: resolve
//         });
//     });
// };

Promise.all([
    preloadImages(),
    // preloadFonts()  
]).then(() => {
    [...document.querySelectorAll('.img-wrap2')].forEach((element) => new DraggableArt(element));
    document.body.classList.remove('loading2');
});



