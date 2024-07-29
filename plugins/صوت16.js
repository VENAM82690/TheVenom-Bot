let handler = async (m, { conn, usedPrefix, __dirname, text, isPrems }) => {
    const vn = './يابضاني.mp3';
    conn.sendPresenceUpdate('recording', m.chat);
    conn.sendMessage(m.chat, {audio: {url: vn}, ptt: true, mimetype: 'audio/mpeg', fileName: `يابضاني.mp3`}, {quoted: m});
};

handler.help = ['يابضاني']
handler.tags = ['notification']
handler.command = ['يابضاني'] 
handler.customPrefix = /^(يابضاني|يبيضي|يابيضي|بيض|نينينيني|بيضي|بضان)$/i;
handler.command = new RegExp;
export default handler