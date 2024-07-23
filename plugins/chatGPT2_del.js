let handler = async (m, { usedPrefix }) => {
  try {
    delete global.chatgpt.data.users[m.sender];
    m.reply(`*[❗] تم حذف سجل الرسائل في النظام الخاص بالـ ChatGPT بنجاح!*\n\n*—◉ إذا واجهت أي خطأ، يمكنك استخدام هذا الأمر ${usedPrefix}chatgpt2 أو ${usedPrefix}ia2.*`);
  } catch (error1) {
    console.log(error1);
    throw `*هناك مشكلة، يرجى التواصل مع صاحب البوت على Instagram: instagram.com/noureddine_ouafy*`;
  }
};
handler.command = ['delchatgpt'];
export default handler;