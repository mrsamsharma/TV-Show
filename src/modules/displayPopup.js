import getShow from './getShow.js';
import getShowComments from './getShowComments.js';

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
      <!-- comments -->
      <div class="comments">
        <h4 class="comments-count">Comments(5)</h4>
        <ul class="comments-list"></ul>
        <h4>Add Comment</h4>
        <form id="add-comment">
          <input type="text" id="name" placeholder="Your name" />
          <br />
          <textarea id="comment" cols="36" rows="10" placeholder="Your insights"></textarea>
          <br>
          <button class="submit-comment" id=${showId}>Comment</button>
        </form>
      </div>
    </div>
      `;

    // Displaying comments
    const showComments = await getShowComments(showId); // show comments array
    const ul = document.querySelector('.comments-list');
    showComments.forEach((showComment) => {
      ul.innerHTML += `
          <li class="item">
            <span>${showComment.creation_date} ${showComment.username}:</span> <span>${showComment.comment}</span>
          </li>
        `;
    });
  };

  loadShow();
};
