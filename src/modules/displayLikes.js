import getLikes from './getLikes.js';

export default async () => {
  let likes = [];
  likes = await getLikes();
  likes.forEach((each) => {
    console.log(each.likes);
  });
  const likesFilter = likes.filter((each) => each.item_id === '58');
  console.log(likesFilter);
};
