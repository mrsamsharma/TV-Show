import getLikes from './getLikes.js';

export default async (id) => {
  let likes = [];
  likes = await getLikes();
  const likesFilter = likes.filter((each) => each.item_id === id);
  return likesFilter[0].likes;
};
