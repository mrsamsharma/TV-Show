export default async () => {
  const link = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cS3EqkNOcFMRSZQU2K7t/likes/';
  return (await fetch(link)).json();
};