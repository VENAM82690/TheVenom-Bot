import {WAMessageStubType} from '@whiskeysockets/baileys';
import fetch from 'node-fetch';

export async function before(m, {conn, participants}) {
  if (!m.messageStubType || !m.isGroup) return !0;
  const groupName = (await conn.groupMetadata(m.chat)).subject;
  const groupAdmins = participants.filter((p) => p.admin);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => null) || './src/avatar_contact.png';
  const img = await (await fetch(pp)).buffer();
  const chat = global.db.data.chats[m.chat];
  const mentionsString = [m.sender, m.messageStubParameters[0], ...groupAdmins.map((v) => v.id)];
  const mentionsContentM = [m.sender, m.messageStubParameters[0]];
  const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};

  if (chat.detect2 && m.messageStubType == 29) {
    let txt1 = `*يا سلام، تم ترقيه واحد من الأعضاء بقى مسؤول!*\n\n`;
    txt1 += `*◦  الجروب:* ${groupName}\n`;
    txt1 += `*◦  المشرف الجديد:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    txt1 += `*◦  عملها مين:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: img, caption: txt1, mentions: mentionsString}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 30) {
    let txt2 = `*حزين أوي، واحد من المسؤولين بقى عضو عادي!*\n\n`;
    txt2 += `*◦  الجروب:* ${groupName}\n`;
    txt2 += `*◦  اللي اتحذف:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    txt2 += `*◦  عملها مين:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: img, caption: txt2, mentions: mentionsString}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 27) {
    let txt3 = `*يا حلاوة، عضو جديد انضم للجروب!* \n\n`;
    txt3 += `*◦  الجروب:* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt3 += `*◦  الجديد ده:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt3 += `*◦  عملها مين:* @${m.sender.split`@`[0]}`;
    } else {
      txt3 += `*◦  الجديد ده:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: img, caption: txt3, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 28) {
    let txt4 = `*يلا، واحد من الأعضاء اتشال من الجروب!*\n\n`;
    txt4 += `*◦  الجروب:* ${groupName}\n`;
    if (!m.sender.endsWith('@g.us')) {
      txt4 += `*◦  اللي اتشال:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt4 += `*◦  عملها مين:* @${m.sender.split`@`[0]}`;
    } else {
      txt4 += `*◦  اللي اتشال:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt4, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 32) {
    let ax;
    if (m.messageStubParameters[0] === m.sender) {
      ax = 'خرج';
    } else {
      ax = 'اتشال';
    }
    let txt5 = `*بص، عضو من الجروب كان في الفترة الأخيرة ${ax}.*\n\n`;
    txt5 += `*◦  الجروب:* ${groupName}\n`;
    if (ax === 'اتشال') {
      txt5 += `*◦  اللي اتشال:* @${m.messageStubParameters[0].split`@`[0]}\n`;
      txt5 += `*◦  عملها مين:* @${m.sender.split`@`[0]}`;
    } else {
      txt5 += `*◦  اللي خرج:* @${m.messageStubParameters[0].split`@`[0]}\n`;
    }
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt5, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 26) {
    let accion;
    if (m.messageStubParameters[0].split`@`[0] === 'on') {
      accion = 'مقفول';
    } else {
      accion = 'مفتوح';
    }
    let txt6 = `*الاعدادات اتغيرت في الجروب مؤخرًا.*\n\n`;
    txt6 += `*◦  الجروب:* ${groupName}\n`;
    txt6 += `*◦  حالة الجروب:* ${'```' + accion + '```'}\n`;
    txt6 += `*◦ عملها مين:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt6, mentions: mentionsContentM}, {quoted: fkontak2});
  }

  if (chat.detect2 && m.messageStubType == 21) {
    let txt7 = `*الجروب غير اسمه في الفترة الأخيرة!* \n\n`;
    txt7 += `*◦ اسم جديد:* ${'```' + groupName + '```'}\n`;
    txt7 += `*◦ عملها مين:* @${m.sender.split`@`[0]}`;
    await conn.sendMessage(m.chat, {image: {url: pp}, caption: txt7, mentions: mentionsContentM}, {quoted: fkontak2});
  }
} /* Cierre del comando */