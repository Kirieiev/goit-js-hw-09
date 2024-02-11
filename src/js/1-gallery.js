'use strict';

import { images } from './gallery-images.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const imageContainer = document.querySelector('.gallery');
imageContainer.insertAdjacentHTML('beforeend', createMarkup(images));
// imageContainer.innerHTML = createMarkup(images);

function createMarkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery-item">
        <a class="gallery-link" href="${original}">
        <img
        class="gallery-image"
        src="${preview}"
        alt="${description}"/>
        </a>
    </li>`
    )
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// second variant

// const markup = images.reduce(
//   (acc, { original, preview, description }) =>
//     (acc += `<li>
//   <a class="gallery__item" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       alt="${description}"
//     />
//   </a>
// </li>`),
//   ''
// );

// second variant/

// old code

// imageContainer.addEventListener('click', handleImageClick);

// function handleImageClick(event) {
//   if (event.target === event.currentTarget) {
//     return;
//   }

//   event.preventDefault();

//   const clickedImage = event.target.closest('.gallery-item');
//   const modalImage = clickedImage.querySelector('.gallery-link').href;

//   document.addEventListener('keydown', event => {
//     if (event.key === 'Escape' && instance) {
//       instance.close();
//     }
//   });

//   const instance = basicLightbox.create(`
//         <div class="modal">
//             <img class="modal-image" src="${modalImage}" alt="${
//     clickedImage.querySelector('.gallery-image').alt
//   }">
//         </div>
//   `);

//   instance.show();
// }

// old code/
