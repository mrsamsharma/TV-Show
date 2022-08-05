export default async () => {
  const link = 'https://api.tvmaze.com/shows';
  return (await fetch(link)).json();
};