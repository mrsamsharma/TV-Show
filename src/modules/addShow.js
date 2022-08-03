import getShow from './getShow.js';

export default (id, title, image) => {
  const showContainer = document.querySelector('.shows-wrapper');
  const showDiv = document.createElement('div');
  showDiv.className = 'show';
  showDiv.setAttribute('id', id);
  const showImg = document.createElement('img');
  showImg.setAttribute('src', image);
  showImg.setAttribute('alt', title);
  showDiv.appendChild(showImg);
  const showTitle = document.createElement('span');
  showTitle.className = 'title';
  showTitle.textContent = title;
  showDiv.appendChild(showTitle);
  const likeIcon = document.createElement('i');
  likeIcon.className = 'like-icon';
  showDiv.appendChild(likeIcon);
  const likesNumber = document.createElement('span');
  likesNumber.className = 'like-number';
  likesNumber.textContent = '2';
  showDiv.appendChild(likesNumber);
  const commentBtn = document.createElement('button');
  // Showing popup when comment btn is clicked
  commentBtn.addEventListener('click', (e) => {
    const showId = Number(e.target.parentElement.id);
    const popupContainer = document.querySelector('.popup-container');
    popupContainer.style.display = 'block';

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
  });
  // document.querySelector('.close-popup-btn').addEventListener('click', ()=>{
  //   alert('hhhhh')
  // })

  // // Hidding popup when the close pupup btn is clicked
  const popupContainer = document.querySelector('.popup-container');
  popupContainer.addEventListener('click', (e) => {
    e.target.parentElement.parentElement.parentElement.remove();
  });
  commentBtn.className = 'comment-btn';
  commentBtn.textContent = 'Comment';
  showDiv.appendChild(commentBtn);
  showContainer.appendChild(showDiv);
};
