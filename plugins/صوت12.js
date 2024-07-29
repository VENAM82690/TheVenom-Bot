let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {
    const vn = './يالهوي.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `يالهوي.mp3`}, {quoted: m});
};

handler.help = ['يالهوي']
handler.tags = ['notification']
handler.command = ['يالهوي'] 
handler.customPrefix = /^(يالهوي|يافضحتك|فضح)$/i;
handler.command = new RegExp;
export default handler