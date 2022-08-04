import addShow from './addShow.js';
import getShows from './getShows.js';
import displayPopup from './displayPopup.js';
import displayLikes from './displayLikes.js';

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

loadShows();

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

displayLikes();
