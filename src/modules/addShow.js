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
  commentBtn.textContent = 'Comment';
  showDiv.appendChild(commentBtn);
  showContainer.appendChild(showDiv);
}