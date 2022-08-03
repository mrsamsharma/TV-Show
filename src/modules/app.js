import addShow from "./addShow";
import getShows from "./getShows";

const shuffle =  (array) => {
  array.sort(() => Math.random() - 0.5);
}

const loadShows = async () => {
  let shows = []
  shows = await getShows();
  shuffle(shows)
  shows = shows.filter((each, index) => {
    return index < 20
  });
  shows.forEach((each) => {
    addShow(each.id, each.name, each.image.medium);
  })}

loadShows();