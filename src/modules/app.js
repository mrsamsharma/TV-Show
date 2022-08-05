import addShow from './addShow.js';
import getShows from './getShows.js';
import displayPopup from './displayPopup.js';
import displayLikes from './displayLikes.js';
import addLike from './addLike.js';
import itemsCounter from './itemsCounter.js';
import addComment from './addComment.js';
import getLikes from './getLikes.js';

const title = document.querySelector('.shows-count');

const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
};

const loadShows = async () => {
  let shows = [];
  shows = await getShows();
  shuffle(shows);
  shows = shows.filter((each, index) => index < 250);
  shows.forEach((each) => {
    addShow(each.id, each.name, each.image.medium);
  });
};

// Displaying pop-up when comment btn is clicked
const showsWrapper = document.querySelector('.shows-wrapper');
showsWrapper.addEventListener('click', async (e) => {
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
    likes = await displayLikes(
      element.parentElement.parentElement.parentElement.id,
    );
    element.nextSibling.innerHTML = `${likes} Likes`;
  }
});

window.onload = loadShows().then(() => {
  title.textContent = `Tv Shows(${itemsCounter()})`;
});

// add comment
popupContainer.addEventListener('click', (e) => {
  const element = e.target;
  if (element.classList.contains('submit-comment')) {
    const name = document.querySelector('#name').value;
    const comment = document.querySelector('#comment').value;
    const showId = element.id;

    if (name === '' || comment === '') return;
    const date = new Date().toISOString().substring(0, 10);

    addComment(showId, name, comment);

    const ul = document.querySelector('.comments-list');
    ul.innerHTML += `
    <li class="item">
      <span>${date} ${name}:</span> <span>${comment}</span>
    </li>
  `;
    document.querySelector('#name').value = '';
    document.querySelector('#comment').value = '';
  }
});

// Display Likes on each item on the Homepage

document.addEventListener('DOMContentLoaded', async () => {
  let showsLikes = [];
  showsLikes = await getLikes();
  const loadedShowsBtn = document.querySelectorAll('.like-number');
  showsLikes.forEach((eachObj) => {
    loadedShowsBtn.forEach((eachElement) => {
      if (eachObj.item_id === eachElement.parentElement.parentElement.parentElement.id) {
        eachElement.textContent = `${eachObj.likes} Likes`;
      }
    });
  });
});