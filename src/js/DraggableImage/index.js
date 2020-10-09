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
import DraggableImage from "./DraggableImage";
// const imagesLoaded = require('imagesloaded');

// Preload images
// const preloadImages = () => {
//     return new Promise((resolve, reject) => {
//         imagesLoaded(document.querySelectorAll('.img-drag, .img-trail'), {background: true}, resolve);
//     });
// };

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

Promise.all([]).then(() => {
    [...document.querySelectorAll('.img-wrap')].forEach((element) => new DraggableImage(element));
    document.body.classList.remove('loading');
});



