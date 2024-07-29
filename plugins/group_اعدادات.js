const handler = async (m, {conn, isAdmin, isOwner, args, usedPrefix, command}) => {
  // لو الشخص مش مسؤول ولا صاحب الجروب، يبقى معندوش صلاحيات
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }

  // تحديد إذا كان هيفتح الجروب أو يقفله بناءً على الكلمة اللي كتبها المستخدم
  const isClose = {
    'فتح': 'not_announcement',
    'buka': 'not_announcement',
    'on': 'not_announcement',
    '1': 'not_announcement',
    'قفل': 'announcement',
    'tutup': 'announcement',
    'off': 'announcement',
    '0': 'announcement',
  }[(args[0] || '')];

  // لو الكلمة مش موجودة في القاموس، بعت رسالة تعليمات
  if (isClose === undefined) {
    const caption = `
*• الإعدادات:*
*${usedPrefix + command} فتح 1*
*${usedPrefix + command} قفل 1*
📌 *_اختار وقت قفل أو فتح الجروب:_* *${usedPrefix + command} قفل 1* 
*_🌿 الأمر ده يقفل أو يفتح الجروب لوقت محدد._*
`;
    m.reply(caption);
    throw false;
  }

  // تحديد الوقت اللي هيفضل فيه الجروب مقفل أو مفتوح
  const timeoutset = 86400000 * args[1] / 24;
  await conn.groupSettingUpdate(m.chat, isClose).then(async (_) => {
    m.reply(`⚠️ *_تم ${isClose == 'announcement' ? 'قفل الجروب_*' : 'فتح الجروب_*'} ${args[1] ? `تفعيل *${clockString(timeoutset)}_* ` : ''}`);
  });

  // لو فيه وقت محدد، هنفذ العملية بعد الوقت ده
  if (args[1]) {
    setTimeout(async () => {
      await conn.groupSettingUpdate(m.chat, `${isClose == 'announcement' ? 'not_announcement' : 'announcement'}`).then(async (_) => {
        conn.reply(m.chat, `${isClose == 'not_announcement' ? '*الجروب اتقفل، دلوقتي بس المسؤولين يقدروا يبعثوا رسائل!*' : '*الجروب اتفتح، دلوقتي كل الأعضاء يقدروا يبعثوا رسائل!*'}`);
      });
    }, timeoutset);
  }
};
handler.help = ['grouptime *<open/close>* *<number>*'];
handler.tags = ['group'];
handler.command = /^(اعدادات|gctime)$/i;

handler.botAdmin = true;
handler.group = true;

export default handler;

// دالة لتنسيق الوقت
function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ms, h, m, s});
  return [h, m, s].map((v) => v.toString().padStart(2, 0) ).join(':');
}