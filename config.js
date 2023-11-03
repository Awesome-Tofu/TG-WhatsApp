// Add values if you are not using env vars
require("dotenv").config();

module.exports = {
  session_key: process.env.SESSION_KEY,
  mongodb_url: process.env.MONGODB_URL || process.env.MONGO_URL || "mongodb+srv://akash:akash@cluster0.yusz4qo.mongodb.net/?retryWrites=true&w=majority",
  telegramBotToken: process.env.BOT_TOKEN || "6295772327:AAH5lC1o40LHoxo-ZLAQCzEIC2DYPs9rMi0",
  ownerID: process.env.OWNER_ID || "5915335486",
  pmReply: process.env.PM_REPLY || false,
  tgDownloadMax: 20971520, // 20 MB
  tgUploadMax: 52428800 // 50MB
};
