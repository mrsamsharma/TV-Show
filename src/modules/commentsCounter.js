export default () => {
  (document.querySelector('.comments-count').innerHTML = document.querySelectorAll('.item').length);
  console.log(document.querySelectorAll('.item').length);
  return document.querySelectorAll('.item').length;
};
