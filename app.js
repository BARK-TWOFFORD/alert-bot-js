const { App } = require("@slack/bolt");
require("dotenv").config();
// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode:true, // enable the following to use socket mode
  appToken: process.env.APP_TOKEN
});

// matches any string that contains the string hey
app.message(/hey/, async ({ command, say }) => {
  try {
    say("Hay is for horses.");
  } catch (error) {
    console.error(error);
  }
});

app.event('file_shared', async ({ event, client, logger}) => {
  await console.log(event)
});

(async () => {
  const port = 3000
  // Start your app
  await app.start(process.env.PORT || port);
  console.log(`⚡️ Slack Bolt app is running on port ${port}!`);
})();