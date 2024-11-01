//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "+234 814 993 9219,+234 705 066 1794";
global.owner = process.env.OWNER_NUMBER || "+234 705 066 1794,+234 814 993 9219";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUU1RNDgzQU1pVjJ2WmJ2TlMwbXNDRFpHR1pHM1RibjBwcmVLdWVCa1Fubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2RHNE04eUFURU0vZno4eVpFUUU2V21jbVkrYk55d0xYSzFWc0tpUWZ5OD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjR21yY3h6b3V4U3FNdFJwclQ0ZVh2R0pGU2hoNHRWTUJMeW1kKzB5ejBRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPaWhwT3NXdS9zckpqUjBhWHFrSVhacWlJSGRjaFUxUUNPQllKZmZYVG1ZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVKdkdXbEVGN3FrVURDOEptWkRzcm41bTlvbVhubWI2U1BPY3FTYjRBMW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjkzM2lLSFZhNG0zVlM5RkgxZVE5SkdlcHZZK2FHVGFrdEQzazY4Tk1CVzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNklGY1VTWURNZFFEUk11cmVEeFFzdXJPcFg0YkFZNTdiRTIyN1JZTUFrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVEweXlpRXVHOGJLYVNKQTFrbXpiVkRITjFJQTBFRmxFM2R3K1lnNE1oYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdxcnNhVitPdUpaajhOS0duTkVtV2JCQzdnQUFwNDYzTGNSSjEzUHh5bHNZQm1ERDExWFN2N1BCR2NtSC9LcFpxUzVpalMyanRlcExyeGFGL1pYdWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIyLCJhZHZTZWNyZXRLZXkiOiJ6dTNkckVEOGpSN1I2MGpHZnVNZ2lURGRhODNpRnFCZjd0WmhXT2pxb3BZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJNc0VyMS1Ma1NmZUttWjRib2hWaDBnIiwicGhvbmVJZCI6IjljZWNkNDBmLTYxYzktNDVkNC1hNmUwLWFmNjZkNDA3NmMxMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIYlhUdmNrYlErNjhybWI4ZjUza1duQW5MRDA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVHNIaFgvUE1iWWROM0ZUYlRFYlJ5QmYzQldnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNUNEVLNjIyIiwibWUiOnsiaWQiOiIyMzQ3MDUwNjYxNzk0OjM4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6InVua25vd24ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05HUjVmb0JFT3k2bExrR0dBWWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ims2Z1VpaWJ5VHgvdGZHL3N1TXdHWmtFQzMxOFY1alUrZlFXYmVFcmMyR1U9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkkvNktLQjlMR1ZubmZzYnB4V256NEkyYkpua2xITXVYZVVMdUFkbjFvRzlLL1pMNTlWNmhEOXhrUGlQcnhHMFRUdkhpZFFCUVEzV3lzZXc4a081aENnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI1bnZ0NnFrL0czamdyTjY0eWIrZkg1K2h1Z1huUFlCb0E4WVcrWXZuNGdobGlGcWx2WllqTnRnQzFHekt0SGFDem0zYUo0UUxheEw4MFV1dDZnT1Zqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNTA2NjE3OTQ6MzhAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWk9vRklvbThrOGY3WHh2N0xqTUJtWkJBdDlmRmVZMVBuMEZtM2hLM05obCJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMDQ4NTYyNiwibXlBcHBTdGF0ZUtleUlkIjoiQUNFQUFQaGYifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
