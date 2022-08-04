export default async (showId, name, comment) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cS3EqkNOcFMRSZQU2K7t/comments';
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: showId,
      username: name,
      comment,
    }),
  });
};
