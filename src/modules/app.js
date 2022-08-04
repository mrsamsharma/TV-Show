import addShow from './addShow.js';
import getShows from './getShows.js';
import displayPopup from './displayPopup.js';
import displayLikes from './displayLikes.js';
import addLike from './addLike.js';
import getLikes from './getLikes.js';
import itemsCounter from './itemsCounter.js';

const title = document.querySelector('.shows-count');

const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
};

const loadShows = async () => {
  let shows = [];
  shows = await getShows();
  shuffle(shows);
  shows = shows.filter((each, index) => index < 20);
  shows.forEach((each) => {
    addShow(each.id, each.name, each.image.medium);
  });
};

// Displaying pop-up when comment btn is clicked
const showsWrapper = document.querySelector('.shows-wrapper');
showsWrapper.addEventListener('click', (e) => {
  const element = e.target;
  if (element.classList.contains('comment-btn')) {
    displayPopup(element);
  }
});

// Hidding pop-up when the close btn is clicked
const popupContainer = document.querySelector('.popup-container');
popupContainer.addEventListener('click', (e) => {
  const element = e.target;
  if (element.classList.contains('fa-xmark')) {
    popupContainer.style.display = 'none';
    document.querySelector('#body').style.overflow = 'visible';
  }
});

showsWrapper.addEventListener('click', async (e) => {
  const element = e.target;
  if (element.classList.contains('like-icon')) {
    await addLike(element.parentElement.parentElement.parentElement.id);
    let likes = '';
    likes = await displayLikes(element.parentElement.parentElement.parentElement.id);
    element.nextSibling.innerHTML = likes;
  }
});

window.onload = loadShows().then(() => {
  title.textContent = `Tv Shows(${itemsCounter()})`;
});

// document.addEventListener('DOMContentLoaded', async (e) => {
//   let likesArr = [];
//   likesArr = await getLikes();
//   likesArr.forEach((each) => {
//     let domLikes = '';
//     domLikes = displayLikes(each.item_id);
//     e.target.classList.contains('like-number').innerHTML = domLikes;
//   });
// });

// document.querySelector('.shows-count').innerHTML = `
//   Tv Shows (${itemsCounter()})
// `;