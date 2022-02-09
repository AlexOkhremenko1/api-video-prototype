const ApiVideoClient = require('@api.video/nodejs-client');
const fs = require('fs');

const Config = {
  apiKey: 't1cBHzoYv7DfnqhihTHTlkLXQabka1rMFyQZdToLn3m'
};

(async () => {
  try {
      const client = new ApiVideoClient(Config);

      // create a video
      const videoCreationPayload = {
          title: 'Sample 1', // The title of your new video.
          description: 'A video about string theory.', // A brief description of your video.
      };
      const video = await client.videos.create(videoCreationPayload);

      // upload a video file into the video container
      await client.videos.upload(video.videoId, './media/sample_1.mp4');
      fs.writeFileSync('index.html', `${video.assets.iframe}<code>${JSON.stringify(video)}</code>`);
      console.log(video);
  } catch (e) {
      console.error(e);
  }
})();