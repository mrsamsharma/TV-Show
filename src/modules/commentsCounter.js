export default () => {
  document.querySelector('.comments-count').innerHTML = document.querySelectorAll('.item').length;
};