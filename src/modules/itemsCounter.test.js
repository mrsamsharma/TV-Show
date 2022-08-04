import itemsCounter from './itemsCounter.js';
// import getShows from './getShows.js';
// import addShow from './addShow.js';

test('Count number of shows in the HomePage', () => {
  document.body.innerHTML = `
  <section class="shows-wrapper">
  <div class="show"></div>
  <div class="show"></div>
  <div class="show"></div>
  </section>
  `;
  // const loadShow = async () => {
  //   let shows = [];
  //   shows = await getShows();
  //   shows = shows.filter((each, index) => index < 57);
  //   shows.forEach((each) => {
  //     addShow(each.id, each.name, each.image.medium);
  //   });
  // };
  // loadShow();
  expect(itemsCounter()).toHaveLength(3);
});