import getShow from './getShow.js';

export default (element) => {
  const showId = Number(element.parentElement.id);
  const popupContainer = document.querySelector('.popup-container');
  popupContainer.style.display = 'block';
  document.querySelector('#body').style.overflow = 'hidden';

  const loadShow = async () => {
    let show = {};
    show = await getShow(showId);
    // pupulate he popup with data
    popupContainer.innerHTML = `
      <div class="popup">
      <img
        class="original-img"
        alt=""
        src="${show.image.original}"
      />
      <span class="close-popup-btn">
        <i class="fa-solid fa-xmark"></i>
      </span>
  
      <!-- details -->
      <div class="details">
        <h1>${show.name}</h1>
        <ul>
          <li><span>Type: </span><span>${show.type}</span></li>
          <li><span>Rating: </span><span>${show.rating.average}</span></li>
          <li><span>Run time: </span><span>${show.runtime} min</span></li>
          <li><span>Language: </span><span>${show.language}</span></li>
        </ul>
        <div class="excerpt">
        ${show.summary}
        </div>
      </div>
    </div>
      `;
  };

  loadShow();
};
