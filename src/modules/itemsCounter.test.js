import itemsCounter from './itemsCounter.js';

test('Count number of shows in the HomePage', () => {
  document.body.innerHTML = `
  <section class="shows-wrapper">
  <div class="show"></div>
  <div class="show"></div>
  <div class="show"></div>
  </section>
  `;
  expect(itemsCounter()).toBe(3);
});