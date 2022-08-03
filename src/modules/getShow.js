export default async (id) => {
  const link = `https://api.tvmaze.com/shows/${id}`;
  return (await fetch(link)).json();
};