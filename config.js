const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_03_07_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDksXG4gICAgICAgIDU1LFxuICAgICAgICA0NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTg5LFxuICAgICAgICA3NixcbiAgICAgICAgODAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTE4LFxuICAgICAgICA1NyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICA2MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjIxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDAsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExLFxuICAgICAgICAyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MCxcbiAgICAgICAgNDksXG4gICAgICAgIDE3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTksXG4gICAgICAgIDc2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDg3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAzNixcbiAgICAgICAgMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAzMixcbiAgICAgICAgMTU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODcsXG4gICAgICAgIDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNixcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDY2LFxuICAgICAgICA2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5MixcbiAgICAgICAgMTA4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIxLFxuICAgICAgICA2MixcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTEyLFxuICAgICAgICA2NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzksXG4gICAgICAgIDcyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDMyLFxuICAgICAgICA5MixcbiAgICAgICAgMTI5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyMixcbiAgICAgICAgOTgsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2LFxuICAgICAgICA2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNyxcbiAgICAgICAgOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTI5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkVmUE5PTm9TZFRtWGdiUGhvaXNRdGRadnhySVJjNHk2UVdZVGdrTnpRT009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjAxMDE2OTQ4NzcxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJDM0ZFQTM2OEY1RTFGM0RBREREMEM4MERBNEYzMzI5RFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjE4NTE0MzFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMDEwMTY5NDg3NzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNDOTlEMTEyQzUxMTk5NjU2MkY0RkMzRjJBMzMzOTg5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTg1MTQzMVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCItR01ycUpieVJjMjdLb2FtR1c0Y2tBXCIsXG4gIFwicGhvbmVJZFwiOiBcImQ3NDUzMDllLTRjNjMtNDhjMC1hZTliLTM3M2NiMDcyNGRiN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDAsXG4gICAgICAyMTcsXG4gICAgICAxMDcsXG4gICAgICAxMjEsXG4gICAgICAxNjMsXG4gICAgICAxMTAsXG4gICAgICAyNCxcbiAgICAgIDcxLFxuICAgICAgMTYwLFxuICAgICAgMTU3LFxuICAgICAgNzEsXG4gICAgICAxNDQsXG4gICAgICAyMzUsXG4gICAgICAxNCxcbiAgICAgIDE2MixcbiAgICAgIDIxLFxuICAgICAgMjE4LFxuICAgICAgODYsXG4gICAgICAxMCxcbiAgICAgIDE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNCxcbiAgICAgIDIzMyxcbiAgICAgIDY5LFxuICAgICAgMTcxLFxuICAgICAgMjMsXG4gICAgICAyNTQsXG4gICAgICAzNyxcbiAgICAgIDIwNixcbiAgICAgIDI2LFxuICAgICAgNzcsXG4gICAgICAxNzEsXG4gICAgICAyNixcbiAgICAgIDE1MixcbiAgICAgIDE2OCxcbiAgICAgIDE5NCxcbiAgICAgIDM1LFxuICAgICAgNixcbiAgICAgIDEyOSxcbiAgICAgIDEyOSxcbiAgICAgIDI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjJSQzg2MVlRXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMDEwMTY5NDg3NzE6OTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJUQVJCT08tQk9UXCIsXG4gICAgXCJsaWRcIjogXCIxNjE2ODQ0ODAwNzM3NjQ6OTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWpTcTVvQ0VLQzhoYlVHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvRzZBMWpsUVc4T3dtb3Z6cWwwTmZzMkNYczhkYzlPbjJnUm9xRHBkQUc0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkcwSW4xL3h1dmJTVnQrV01OT09lbzZpN1hkays1d3BEWkdsbTRRdzhvQjFUT2s5ZkRMOGJkUlAzWWlaeElFNk5Ea1dwL1pOK2xCSSszM1VnYWpsVUF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk1ad0NZWUZ0YTBuZzVuNWtoQlhxelBzVGJZUlBva1NNU0xxZjRPY0U2SkhqWlgzTE01V3Bwd2FXRHBBUFZLa2orU29pNmRLbllkNGZTK3pwYzBGZGlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIwMTAxNjk0ODc3MTo5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxODUxNDI4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUFVEXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQVUQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ6c3NrcUZpeUtuenAxeXlkbjdvUUc0NkxXTDZudm43ZzBFMDVOVGYvcEcwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjU5MjExMTg4MCxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzIxNjg4OTU2MjYwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || ""
