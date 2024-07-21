let handler = async (m, { conn, args,
usedPrefix, command }) => {
conn.relayMessage(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: '> *﹝⟣┈┈┈⟢﹝🍄﹞⟣┈┈┈⟢﹞*\n> *مرحبا بك/ي  ${taguser}*'
 },
 body: {
 text: '> *﹝⟣┈┈┈⟢﹝🍄﹞⟣┈┈┈⟢﹞*\n> *✨هذة هيا قائمه الاوامر✨*\n> *قم بأختيار قسم من القائمه👇🏻*\n> *﹝⟣┈┈┈⟢﹝🍄﹞⟣┈┈┈⟢﹞*\n> *Copyright©* 2024 Mahmoud Al Tarboo.'
  },
  nativeFlowMessage: {
  buttons: [
   {
  name: 'single_select',
  buttonParamsJson: JSON.stringify({
  title: '💫 اخـتر القـسـم 💫',
  sections: [
  {
  title: 'قسم الاوامر',
  highlight_label: '𝐁𝐎𝐓_𝐓𝐀𝐑𝐁𝐎𝐎',
  rows: [
  {
  header: 'هذا القسم خاص بالمجموعات فقط👥',
  title: 'قـسـم الجروبات 👥',
  description: '',
  id: '.قسم-الجروبات'
  },
  {
  header: 'هذا القسم خاص بالتحميلات فقط📥',
  title: 'قـسـم الـتنـزيلات📥✬',
  description: '',
  id: '.قسم-التنزيلات'
  },
  {
   header: 'هذا القسم خاص بالمرح🧸',
  title: 'قـسـم الـتـرفيـه🎮✬',
  description: '',
  id: '.قسم-الترفيه'
  },
  {
    header: 'يوجد بة كل الاوامر المتعلقة بالتحويل 🛠️',
  title: 'قـسـم الـتحـويل🛠️✬',
  description: '',
  id: '.قسم-التحويل'
  },
  {
  header: ' يوجد بة كل الاوامر الاسلامية👳🏻‍♂ ',
  title: 'قـسـم الـديـني✨✬',
  description: '',
  id: '.قسم-ديني'
  },
  {
  header: 'هذا القسم خاص بالمطور فقط⚙️',
  title: ' قـسـم الـمـطور🙎🏻✬',
  description: '',
  id: '.قسم-المطور'
  },
   {
    header: 'هاذا القسم للألقاب🖊️',
  title: ' قـسـم الألقاب📕✬',
  description: '',
  id: '.قسم-الألقاب'
  },
   {
  header: 'هنا قـسم الالعاب والفعاليه🕹️',
  title: ' قـسم الالعاب🧩✬',
  description: '',
  id: '.قسم-الالعاب'
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
                                    display_text: "قنـاة الـواتـساب📣",
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
  handler.command = ['مهام','ty','er','youssef','ui','op']

  export default handler
