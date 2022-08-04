import getLikes from './getLikes.js';

export default async () => {
  let likes = [];
  likes = await getLikes();
  likes.forEach((each) => {
    console.log(each.likes);
  });
};
