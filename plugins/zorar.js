let handler = async (m, { conn, args,
usedPrefix, command }) => {
const taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
conn.relayMessage(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: '> *✧────[ 𝑾𝑬𝑳𝑪𝑶𝑴𝑬 ]────✧*\n> *🤴🏻 المطور :*𝑬𝐿𝑻𝑨𝑹𝑩𝑶𝑶*\n> **✅ الاصدار :*${vs}\n> *🎳 البادئة :*${usedPrefix}*\n> *🔐 الشات الخاص :*${groups.length}*\n> *📆 التاريخ :*${date}*\n*🚀 وقت التشغيل :*${uptime}*\n> *🐢 السرعة :*${speed}*\n*✧────[ 𝐁𝐎𝐓_𝐓𝐀𝐑𝐁𝐎𝐎 ]────✧*'
 },
 body: {
 text: '> *`افتح القائمة بواسطه الزر`🔘*\n\n> *Copyright©* 2024 Mahmoud Al Tarboo.'
  },
  nativeFlowMessage: {
  buttons: [
   {
  name: 'single_select',
  buttonParamsJson: JSON.stringify({
  title: ' 📜MENU📜',
  sections: [
  {
  title: '✨قائمة الأوامر✨',
  highlight_label: '𝐁𝐎𝐓_𝐓𝐀𝐑𝐁𝐎𝐎',
  rows: [
  {
  header: 'OWNER',
  title: 'الـمطور🤖',
  description: '',
  id: '.المطور'
  },
  {
  header: 'PRIVACY',
  title: 'الاسـتخدام📜',
  description: '',
  id: '.الاستخدام'
  },
  {
  header: 'REBORT',
  title: 'طـلـب ابـلاغ📨',
  description: '',
  id: '.بلاغ'
  },
  {
  header: 'LIST OF COMMANDS ',
  title: 'طـلـب الاوامـر📑',
  description: '',
  id: '.مهام'
  }
  ]
  }
  ]
  }),
  messageParamsJson: ''
  }, 
  {
                                name: "cta_url",
                                buttonParamsJson: JSON.stringify({
                                    display_text: "جروب💫 الدعم💫",
                                    url: "https://chat.whatsapp.com/HTAcYFJ19sC07ykgnKqBzp",
                                    merchant_url: "https://chat.whatsapp.com/HTAcYFJ19sC07ykgnKqBzp"
  })
  }
  ]
  }
  }
  }
  }
  }, {})

  }

  handler.help = ['info']
  handler.tags = ['main']
  handler.command = ['أوامر','اوامر','الاوامر','ألاوامر','menu','Menu']

  export default handler
