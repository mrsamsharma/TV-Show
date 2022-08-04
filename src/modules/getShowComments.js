export default async (showId) => {
  const link =
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cS3EqkNOcFMRSZQU2K7t/comments?item_id=" +
    showId;
  return (await fetch(link)).json();
};
